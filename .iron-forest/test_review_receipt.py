"""Offline check of the actual gh comment body against Canopy's strict contract."""
import contextlib
import importlib.util
import io
import json
import os
from pathlib import Path
import subprocess
import tempfile
import unittest
from unittest.mock import patch

spec = importlib.util.spec_from_file_location("profile_linear", Path(__file__).with_name("linear.py"))
profile = importlib.util.module_from_spec(spec)
spec.loader.exec_module(profile)


class ReviewReceiptContract(unittest.TestCase):
    def run_receipt(self, *, work=None, comments=None, base="master"):
        revision = "a" * 40
        run_id = "123-verifier"
        if work is None:
            work = {"system": profile.LINEAR_SYSTEM, "id": "work-1", "key": "MIS-1"}
        run = {"run_id": run_id, "agent": "verifier", "request_id": "request-1",
               "authority": "review", "work": work}
        candidate = {"revision": revision, "branch": "forest/mis-1/fix",
                     "authority": "review", "work": work}
        checks = {"schema": "forest.checks.v1", "revision": revision,
                  "results": [{"name": "check", "ok": True, "exit": 0}], "time": "2026-09-12T12:00:00Z"}
        verdict = {"schema": "forest.verdict.v1", "revision": revision,
                   "verdict": "approve", "summary": "No blocking findings.", "time": checks["time"]}
        pull = {"url": "https://github.com/misty-step/cantrip/pull/1", "state": "OPEN",
                "baseRefName": base, "headRefName": candidate["branch"],
                "headRefOid": revision, "comments": comments or []}
        posted_bodies = []

        def command(args, **kwargs):
            if args[0].endswith("/forest"):
                value = {"data": {"live_runs": [run]}}
            elif args[:2] == ("git", "fetch"):
                return subprocess.CompletedProcess(args, 0, "", "")
            elif args[:2] == ("git", "rev-parse"):
                return subprocess.CompletedProcess(args, 0, "b" * 40, "")
            elif args[:2] == ("git", "show"):
                kind = args[2].split(":")[1].removesuffix(".json")
                value = {"request": candidate, "checks": checks, "verdict": verdict}[kind]
            elif args[:3] == ("gh", "pr", "view"):
                value = pull
            elif args[:3] == ("gh", "pr", "comment"):
                posted_bodies.append(args[args.index("--body") + 1])
                return subprocess.CompletedProcess(args, 0, pull["url"] + "#issuecomment-1", "")
            else:
                self.fail(f"unexpected external command: {args[0]}")
            return subprocess.CompletedProcess(args, 0, json.dumps(value), "")

        with tempfile.TemporaryDirectory() as temp:
            root = Path(temp)
            runs = root / ".iron-forest/runtime/runs"
            runs.mkdir(parents=True)
            (root / ".iron-forest/config.yaml").write_text("repo: misty-step/cantrip\n")
            (runs / f"{run_id}.request.json").write_text(json.dumps(
                {"id": run["request_id"], "authority": "review", "work": work}))
            with patch.dict(os.environ, {"FOREST_RUN_ID": run_id}), patch.object(
                    profile.subprocess, "run", side_effect=command), contextlib.redirect_stdout(io.StringIO()):
                result = profile.review_receipt(root, revision, pull["url"])
        return result, posted_bodies, revision, run_id

    def test_posted_body_is_exact_six_field_reference_contract(self):
        result, posted_bodies, revision, run_id = self.run_receipt()
        self.assertEqual(result, 0)
        self.assertEqual(len(posted_bodies), 1)
        marker, body = posted_bodies[0].split("\n", 1)
        self.assertEqual(marker, "<!-- forest.review.v1 -->")
        receipt = json.loads(body)
        self.assertEqual(set(receipt), {"schema", "run_id", "work_id", "revision", "decision", "summary"})
        self.assertEqual(receipt["revision"], revision)
        self.assertEqual(receipt["run_id"], run_id)
        self.assertEqual(receipt["decision"], "approve")
        self.assertIn("check exit=0 ok=true", receipt["summary"])
        self.assertIn(f"refs/forest/v1/verdict/{revision}", receipt["summary"])

    def test_pending_candidate_ignores_stale_branch_tip(self):
        revision = "a" * 40
        branch = "refs/heads/forest/mis-1/fix"
        request_ref = f"refs/forest/v1/request/{revision}"
        request = {
            "subject": "MIS-1",
            "branch": branch,
            "revision": revision,
            "authority": "review",
            "work": {"system": profile.LINEAR_SYSTEM, "id": "work-1"},
        }

        def command(args, **kwargs):
            if args[:2] == ["git", "-C"] and args[3] == "fetch":
                return subprocess.CompletedProcess(args, 0, "", "")
            if args[:2] == ["git", "-C"] and args[3] == "for-each-ref":
                return subprocess.CompletedProcess(args, 0, request_ref + "\n", "")
            if args[:2] == ["git", "-C"] and args[3] == "show-ref":
                return subprocess.CompletedProcess(args, 1, "", "")
            if args[:2] == ["git", "-C"] and args[3] == "show":
                return subprocess.CompletedProcess(args, 0, json.dumps(request), "")
            if args[:2] == ["git", "-C"] and args[3] == "ls-remote":
                return subprocess.CompletedProcess(args, 0, f"{'b' * 40}\t{branch}\n", "")
            self.fail(f"unexpected external command: {args}")

        with patch.object(profile.subprocess, "run", side_effect=command):
            self.assertIsNone(profile.pending_request_candidate(Path("/repo")))

    def test_missing_work_id_is_adapter_error(self):
        work = {"system": profile.LINEAR_SYSTEM, "key": "MIS-1"}
        with self.assertRaisesRegex(profile.AdapterError, "no work identity"):
            self.run_receipt(work=work)

    def test_non_json_marker_comment_is_ignored(self):
        comment = {"body": "<!-- forest.review.v1 -->\nnot json"}
        result, posted_bodies, _, _ = self.run_receipt(comments=[comment])
        self.assertEqual(result, 0)
        self.assertEqual(len(posted_bodies), 1)

    def test_pr_must_target_master(self):
        with self.assertRaisesRegex(profile.AdapterError, "open exact candidate revision"):
            self.run_receipt(base="maintenance")


if __name__ == "__main__":
    unittest.main()

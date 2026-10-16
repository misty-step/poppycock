import assert from "node:assert/strict";

// Versions API resource metadata, not timestamps, establishes whether a code-only
// rollback keeps the same data authority and the SQLite class lifecycle intact.
export function assertCompatibleRollback(current, target) {
  const bindings = (version) => version.resources?.bindings ?? [];
  const value = (version, name) => bindings(version).find((b) => b.name === name);
  const currentStore = value(current, "POPPYCOCK_BACKEND");
  const targetStore = value(target, "POPPYCOCK_BACKEND");
  if (currentStore) {
    assert.ok(currentStore.namespace_id, "Current Durable Object namespace is unknown");
    assert.equal(
      targetStore?.namespace_id,
      currentStore.namespace_id,
      "Rollback cannot cross the Durable Object lifecycle",
    );
  }
  assert.ok(
    ["/backend", "https://fiery-spaniel-734.convex.cloud"].includes(
      value(current, "NEXT_PUBLIC_CONVEX_URL")?.text,
    ),
    "Current writer is unknown",
  );
  assert.equal(
    value(target, "NEXT_PUBLIC_CONVEX_URL")?.text,
    value(current, "NEXT_PUBLIC_CONVEX_URL")?.text,
    "Code-only rollback cannot change the data writer; use the reconciled data rollback runbook",
  );
}

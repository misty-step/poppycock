import { describe, expect, it } from "vitest";
import { assertCompatibleRollback } from "../scripts/rollback-compatibility.mjs";

const version = (writer: string, namespace?: string) => ({
  resources: {
    bindings: [
      { name: "NEXT_PUBLIC_CONVEX_URL", type: "plain_text", text: writer },
      ...(namespace
        ? [{ name: "POPPYCOCK_BACKEND", type: "durable_object_namespace", namespace_id: namespace }]
        : []),
    ],
  },
});
const legacy = "https://fiery-spaniel-734.convex.cloud";
describe("data-safe code rollback", () => {
  it("allows same writer and namespace", () => {
    expect(() =>
      assertCompatibleRollback(version("/backend", "same"), version("/backend", "same")),
    ).not.toThrow();
    expect(() => assertCompatibleRollback(version(legacy), version(legacy))).not.toThrow();
  });
  it("refuses crossing the SQLite lifecycle or namespace", () => {
    expect(() => assertCompatibleRollback(version(legacy, "same"), version(legacy))).toThrow(
      /lifecycle/,
    );
    expect(() =>
      assertCompatibleRollback(version("/backend", "same"), version("/backend", "other")),
    ).toThrow(/lifecycle/);
  });
  it("refuses changing writer even when the dormant version has the same namespace", () => {
    expect(() =>
      assertCompatibleRollback(version("/backend", "same"), version(legacy, "same")),
    ).toThrow(/data writer/);
  });
  it("refuses unknown metadata rather than assuming it is compatible", () => {
    expect(() => assertCompatibleRollback({}, {})).toThrow(/unknown/);
  });
});

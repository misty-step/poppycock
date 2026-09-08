import { describe, expect, it } from "vitest";
import { firstOpenOrdinal, ORDINAL_WALK, ordinalWindow } from "../convex/deck/sample";

describe("ordinal draw windows", () => {
  it("does not always include the lowest ordinals of a large category", () => {
    const window = ordinalWindow(200, 80, 12);
    expect(window).toEqual([80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91]);
    expect(window.some((ordinal) => ordinal < 12)).toBe(false);
  });

  it("wraps from a high start through the end, then the true neighbors, not the global lowest 12", () => {
    expect(ordinalWindow(80, 75, 12)).toEqual([75, 76, 77, 78, 79, 0, 1, 2, 3, 4, 5, 6]);
  });

  it("treats a bounded miss as empty even when unseen ordinals remain outside the window", () => {
    const blocked = new Set(Array.from({ length: 12 }, (_, index) => index));
    expect(firstOpenOrdinal(80, 0, blocked, 12)).toBeNull();
    expect(firstOpenOrdinal(80, 0, blocked, 80)).toBe(12);
  });

  it("scans a whole small category when it fits in the walk", () => {
    expect(ordinalWindow(18, 10).length).toBe(18);
    expect(ORDINAL_WALK).toBe(32);
  });
});

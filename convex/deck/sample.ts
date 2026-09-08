export const ORDINAL_WALK = 32;

/** Consecutive ordinals from start, wrapping inside the category. Never the lowest N salts. */
export function ordinalWindow(count: number, start: number, walk = ORDINAL_WALK): number[] {
  if (count <= 0 || !Number.isInteger(count) || !Number.isInteger(start)) return [];
  const n = Math.min(count, Math.max(0, walk));
  const origin = ((start % count) + count) % count;
  const window: number[] = [];
  for (let step = 0; step < n; step += 1) window.push((origin + step) % count);
  return window;
}

export function firstOpenOrdinal(
  count: number,
  start: number,
  blocked: ReadonlySet<number>,
  walk = ORDINAL_WALK,
): number | null {
  for (const ordinal of ordinalWindow(count, start, walk)) {
    if (!blocked.has(ordinal)) return ordinal;
  }
  return null;
}

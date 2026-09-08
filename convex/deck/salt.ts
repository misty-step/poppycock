/** FNV-1a 32-bit. Stable across reseeds so a room's random probe stays meaningful. */
export function drawSalt(key: string): number {
  let hash = 2166136261;
  for (let index = 0; index < key.length; index += 1) {
    hash ^= key.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

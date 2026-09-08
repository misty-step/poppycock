export type SeedSource = { title: string; url: string; note: string };

export type SeedCardDraft = {
  key: string;
  question: string;
  answer: string;
  source: SeedSource;
};

export type SeedCard = SeedCardDraft & {
  packKey: string;
  category: string;
};

export type SeedPackMeta = {
  key: string;
  title: string;
  blurb: string;
  category: string;
  sort: number;
};

export type SeedPack = SeedPackMeta & { cards: SeedCard[] };

export function definePack(meta: SeedPackMeta, cards: readonly SeedCardDraft[]): SeedPack {
  return {
    ...meta,
    cards: cards.map((card) => ({ ...card, packKey: meta.key, category: meta.category })),
  };
}

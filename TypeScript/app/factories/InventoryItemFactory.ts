import { Item } from "@/gilded-rose";
import { BrieItemStrategy } from "@/models/BrieItemStrategy";
import { BackstageItemStrategy } from "@/models/BackstageItemStrategy";
import { SulfurasItemStrategy } from "@/models/SulfurasItemStrategy";
import { BasicItemStrategy } from "@/models/BasicItemStrategy";
import { ItemStrategy } from "@/models/ItemStrategy";
import { ConjuredItemStrategy } from "@/models/ConjuredItemStrategy";

const AGED_BRIE = "aged brie";
const BACKSTAGE_PASSES = "backstage passes";
const SULFURAS = "sulfuras";
const CONJURED = "conjured";

type StrategyRule = {
  matches: (name: string) => boolean;
  build: (item: Item) => ItemStrategy;
};

const STRATEGY_RULES: StrategyRule[] = [
  {
    matches: (name) => name.includes(CONJURED),
    build: (item) => new ConjuredItemStrategy(item),
  },
  {
    matches: (name) => name.includes(AGED_BRIE),
    build: (item) => new BrieItemStrategy(item),
  },
  {
    matches: (name) => name.includes(BACKSTAGE_PASSES),
    build: (item) => new BackstageItemStrategy(item),
  },
  {
    matches: (name) => name.includes(SULFURAS),
    build: (item) => new SulfurasItemStrategy(item),
  },
];

export function createInventoryItem(item: Item): ItemStrategy {
  const normalized = item.name.toLowerCase().trim();

  for (const rule of STRATEGY_RULES) {
    if (rule.matches(normalized)) {
      return rule.build(item);
    }
  }

  return new BasicItemStrategy(item);
}

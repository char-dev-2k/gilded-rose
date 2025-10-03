import { Item } from "@/gilded-rose";
import { BrieItemStrategy } from "@/models/BrieItemStrategy";
import { BackstageItemStrategy } from "@/models/BackstageItemStrategy";
import { SulfurasItemStrategy } from "@/models/SulfurasItemStrategy";
import { BasicItemStrategy } from "@/models/BasicItemStrategy";
import { ItemStrategy } from "@/models/ItemStrategy";

type InventoryItemFactory = (item: Item) => ItemStrategy;

const AGED_BRIE = "Aged Brie";
const BACKSTAGE_PASSES = "Backstage passes to a TAFKAL80ETC concert";
const SULFURAS = "Sulfuras, Hand of Ragnaros";

const strategyFactories: Record<string, InventoryItemFactory> = {
  [AGED_BRIE]: (item) => new BrieItemStrategy(item),
  [BACKSTAGE_PASSES]: (item) => new BackstageItemStrategy(item),
  [SULFURAS]: (item) => new SulfurasItemStrategy(item),
};

export function createInventoryItem(item: Item): ItemStrategy {
  const factory = strategyFactories[item.name];
  if (factory) {
    return factory(item);
  }

  return new BasicItemStrategy(item);
}

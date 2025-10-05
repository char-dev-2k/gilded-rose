import { createStoreItem } from "./factories/StoreItemFactory";
import { isUpdatableItem, UpdatableItem } from "./interfaces/UpdatableItem";

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items
      .map(i => createStoreItem(i))
      .filter(i => isUpdatableItem(i as any))
      .forEach(i => (i as any as UpdatableItem).updateQuality())
    return this.items;
  }
}

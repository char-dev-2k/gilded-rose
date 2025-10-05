import { Item } from "@/gilded-rose";
import { createStoreItem } from "@/factories/StoreItemFactory";
import { BackstageItemStrategy } from "@/models/BackstageItemStrategy";
import { BasicItemStrategy } from "@/models/BasicItemStrategy";
import { BrieItemStrategy } from "@/models/BrieItemStrategy";
import { ConjuredItemStrategy } from "@/models/ConjuredItemStrategy";
import { SulfurasItemStrategy } from "@/models/SulfurasItemStrategy";

describe("StoreItemFactory", () => {

  const createItem = (name: string, sellIn: number, quality: number) => {
    return new Item(name, sellIn, quality);
  };

  it("should create a basic item", () => {
    const storeItem = createStoreItem(createItem("foo", 1, 1));
    expect(storeItem).toBeInstanceOf(BasicItemStrategy);
  });

  it("should create a brie item", () => {
    const storeItem = createStoreItem(createItem("Aged Brie", 1, 1));
    expect(storeItem).toBeInstanceOf(BrieItemStrategy);
  });

  it("should create a backstage item", () => {
    const storeItem = createStoreItem(createItem("Backstage passes to a TAFKAL80ETC concert", 1, 1));
    expect(storeItem).toBeInstanceOf(BackstageItemStrategy);
  });

  it("should create a sulfuras item", () => {
    const storeItem = createStoreItem(createItem("Sulfuras, Hand of Ragnaros", 1, 1));
    expect(storeItem).toBeInstanceOf(SulfurasItemStrategy);
  });

  it("should create a conjured item", () => {
    const storeItem = createStoreItem(createItem("Conjured potion", 1, 1));
    expect(storeItem).toBeInstanceOf(ConjuredItemStrategy);
  });

});

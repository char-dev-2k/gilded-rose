import { Item } from "@/gilded-rose";
import { createInventoryItem } from "@/factories/InventoryItemFactory";
import { BackstageItemStrategy } from "@/models/BackstageItemStrategy";
import { BasicItemStrategy } from "@/models/BasicItemStrategy";
import { BrieItemStrategy } from "@/models/BrieItemStrategy";
import { ConjuredItemStrategy } from "@/models/ConjuredItemStrategy";
import { SulfurasItemStrategy } from "@/models/SulfurasItemStrategy";

describe("InventoryItemFactory", () => {
  it("should create a basic item", () => {
    const item = new Item("foo", 1, 1);
    const inventoryItem = createInventoryItem(item);
    expect(inventoryItem).toBeInstanceOf(BasicItemStrategy);
  });

  it("should create a brie item", () => {
    const item = new Item("Aged Brie", 1, 1);
    const inventoryItem = createInventoryItem(item);
    expect(inventoryItem).toBeInstanceOf(BrieItemStrategy);
  });

  it("should create a backstage item", () => {
    const item = new Item("Backstage passes to a TAFKAL80ETC concert", 1, 1);
    const inventoryItem = createInventoryItem(item);
    expect(inventoryItem).toBeInstanceOf(BackstageItemStrategy);
  });

  it("should create a sulfuras item", () => {
    const item = new Item("Sulfuras, Hand of Ragnaros", 1, 1);
    const inventoryItem = createInventoryItem(item);
    expect(inventoryItem).toBeInstanceOf(SulfurasItemStrategy);
  });

  it("should create a conjured item", () => {
    const item = new Item("Conjured potion", 1, 1);
    const inventoryItem = createInventoryItem(item);
    expect(inventoryItem).toBeInstanceOf(ConjuredItemStrategy);
  });

});

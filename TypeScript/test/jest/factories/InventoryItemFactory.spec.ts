import { createInventoryItem } from "@/factories/InventoryItemFactory";
import { Item } from "@/gilded-rose";

describe("InventoryItemFactory", () => {
  it.each([
    ["foo"],
    ["Aged Brie"],
    ["Backstage passes to a TAFKAL80ETC concert"],
    ["Sulfuras, Hand of Ragnaros"],
  ])("should create an inventory item for %s", (itemName) => {
    const item = new Item(itemName, 1, 1);
    const inventoryItem = createInventoryItem(item);
    expect(inventoryItem).toBeDefined();
  });
});

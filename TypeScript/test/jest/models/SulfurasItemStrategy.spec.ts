import { SulfurasItemStrategy } from "@/models/SulfurasItemStrategy";
import { Item } from "@/gilded-rose";

describe("SulfurasItemStrategy", () => {
  it("Sell in doesn't change", () => {
    const item = new Item("Sulfuras, Hand of Ragnaros", 1, 80)
    const sulfurasItem = new SulfurasItemStrategy(item);
    sulfurasItem.updateQuality()
    expect(sulfurasItem.getSellIn()).toBe(1);
  });

  it("Quality doesn't change", () => {
    const item = new Item("Sulfuras, Hand of Ragnaros", 1, 80)
    const sulfurasItem = new SulfurasItemStrategy(item);
    sulfurasItem.updateQuality()
    expect(sulfurasItem.getQuality()).toBe(80);
  });

  it("Expired items don't change", () => {
    const item = new Item("Sulfuras, Hand of Ragnaros", -1, 80)
    const sulfurasItem = new SulfurasItemStrategy(item);
    sulfurasItem.updateQuality()
    expect(sulfurasItem.getQuality()).toBe(80);
  });
});

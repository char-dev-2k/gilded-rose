import { BackstageItemStrategy } from "@/models/BackstageItemStrategy";
import { Item } from "@/gilded-rose";

describe("BackstageItemStrategy", () => {
  it("Quality increases by 1 every day", () => {
    const item = new Item("Backstage passes to a TAFKAL80ETC concert", 11, 0);
    const backstageItem = new BackstageItemStrategy(item);
    backstageItem.updateQuality();
    expect(backstageItem.getQuality()).toBe(1);
  });

  it("Quality increases by 2 when there are 10 or less days to sell", () => {
    const item = new Item("Backstage passes to a TAFKAL80ETC concert", 10, 0);
    const backstageItem = new BackstageItemStrategy(item);
    backstageItem.updateQuality();
    expect(backstageItem.getQuality()).toBe(2);
  });

  it("Quality increases by 3 when there are 5 or less days to sell", () => {
    const item = new Item("Backstage passes to a TAFKAL80ETC concert", 5, 0);
    const backstageItem = new BackstageItemStrategy(item);
    backstageItem.updateQuality();
    expect(backstageItem.getQuality()).toBe(3);
  });

  it("Quality can't be more than 50", () => {
    const item = new Item("Backstage passes to a TAFKAL80ETC concert", 1, 50);
    const backstageItem = new BackstageItemStrategy(item);
    backstageItem.updateQuality();
    expect(backstageItem.getQuality()).toBe(50);
  });

  it("Quality drops to 0 after the concert", () => {
    const item = new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10);
    const backstageItem = new BackstageItemStrategy(item);
    backstageItem.updateQuality();
    expect(backstageItem.getQuality()).toBe(0);
  });

  it("Expired items don't change", () => {
    const item = new Item("Backstage passes to a TAFKAL80ETC concert", -1, 10);
    const backstageItem = new BackstageItemStrategy(item);
    backstageItem.updateQuality();
    expect(backstageItem.getQuality()).toBe(0);
  });
});

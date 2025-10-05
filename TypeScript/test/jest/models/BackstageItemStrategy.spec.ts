import { BackstageItemStrategy } from "@/models/BackstageItemStrategy";
import { Item } from "@/gilded-rose";

describe("BackstageItemStrategy", () => {

  const createItem = (sellIn: number, quality: number) => {
    return new Item("foo", sellIn, quality);
  };

  it("Quality increases by 1 every day", () => {
    const backstageItem = new BackstageItemStrategy(createItem(11, 0));
    backstageItem.updateQuality();
    expect(backstageItem.getQuality()).toBe(1);
  });

  it("Quality increases by 2 when there are 10 or less days to sell", () => {
    const backstageItem = new BackstageItemStrategy(createItem(10, 0));
    backstageItem.updateQuality();
    expect(backstageItem.getQuality()).toBe(2);
  });

  it("Quality increases by 3 when there are 5 or less days to sell", () => {
    const backstageItem = new BackstageItemStrategy(createItem(5, 0));
    backstageItem.updateQuality();
    expect(backstageItem.getQuality()).toBe(3);
  });

  it("Quality can't be more than 50", () => {
    const backstageItem = new BackstageItemStrategy(createItem(1, 50));
    backstageItem.updateQuality();
    expect(backstageItem.getQuality()).toBe(50);
  });

  it("Quality drops to 0 after the concert", () => {
    const backstageItem = new BackstageItemStrategy(createItem(0, 10));
    backstageItem.updateQuality();
    expect(backstageItem.getQuality()).toBe(0);
  });

  it("Expired items don't change", () => {
    const backstageItem = new BackstageItemStrategy(createItem(-1, 10));
    backstageItem.updateQuality();
    expect(backstageItem.getQuality()).toBe(0);
  });
});

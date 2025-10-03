import { ConjuredItemStrategy } from "@/models/ConjuredItemStrategy";
import { Item } from "@/gilded-rose";

describe("ConjuredItemStrategy", () => {
  it("Quality decreases by 2 every day", () => {
    const item = new Item("Conjured", 1, 1);
    const conjuredItem = new ConjuredItemStrategy(item)
    conjuredItem.updateQuality()
    expect(conjuredItem.getQuality()).toBe(0);
  });

  it("Quality can't be negative", () => {
    const item = new Item("Conjured", 1, 0);
    const conjuredItem = new ConjuredItemStrategy(item)
    conjuredItem.updateQuality()
    expect(conjuredItem.getQuality()).toBe(0);
  });

  it("Expired items degrade twice as fast", () => {
    const item = new Item("Conjured", 0, 10);
    const conjuredItem = new ConjuredItemStrategy(item)
    conjuredItem.updateQuality()
    expect(conjuredItem.getQuality()).toBe(6);
  });
});


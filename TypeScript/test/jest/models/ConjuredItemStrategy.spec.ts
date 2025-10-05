import { ConjuredItemStrategy } from "@/models/ConjuredItemStrategy";
import { Item } from "@/gilded-rose";

describe("ConjuredItemStrategy", () => {

  const createItem = (sellIn: number, quality: number) => {
    return new Item("foo", sellIn, quality);
  };

  it("Quality decreases by 2 every day", () => {
    const conjuredItem = new ConjuredItemStrategy(createItem(1, 1))
    conjuredItem.updateQuality()
    expect(conjuredItem.getQuality()).toBe(0);
  });

  it("Quality can't be negative", () => {
    const conjuredItem = new ConjuredItemStrategy(createItem(1, 0))
    conjuredItem.updateQuality()
    expect(conjuredItem.getQuality()).toBe(0);
  });

  it("Expired items degrade twice as fast", () => {
    const conjuredItem = new ConjuredItemStrategy(createItem(0, 10))
    conjuredItem.updateQuality()
    expect(conjuredItem.getQuality()).toBe(6);
  });
});


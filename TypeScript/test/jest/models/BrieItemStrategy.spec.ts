import { BrieItemStrategy } from "@/models/BrieItemStrategy";
import { Item } from "@/gilded-rose";

describe("BrieItemStrategy", () => {

  const createItem = (sellIn: number, quality: number) => {
    return new Item("foo", sellIn, quality);
  };

  it("Quality increases by 1 every day", () => {
    const brieItem = new BrieItemStrategy(createItem(1, 0));
    brieItem.updateQuality();
    expect(brieItem.getQuality()).toBe(1);
  });

  it("Expired items increase twice as fast", () => {
    const brieItem = new BrieItemStrategy(createItem(0, 0));
    brieItem.updateQuality();
    expect(brieItem.getQuality()).toBe(2);
  });

  it("Quality can't be more than 50", () => {
    const brieItem = new BrieItemStrategy(createItem(1, 50));
    brieItem.updateQuality();
    expect(brieItem.getQuality()).toBe(50);
  });
});

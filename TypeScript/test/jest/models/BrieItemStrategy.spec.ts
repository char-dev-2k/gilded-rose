import { BrieItemStrategy } from "@/models/BrieItemStrategy";
import { Item } from "@/gilded-rose";

describe("BrieItemStrategy", () => {
  it("Quality increases by 1 every day", () => {
    const item = new Item("Aged Brie", 1, 0);
    const brieItem = new BrieItemStrategy(item);
    brieItem.updateQuality();
    expect(brieItem.getQuality()).toBe(1);
  });

  it("Expired items increase twice as fast", () => {
    const item = new Item("Aged Brie", 0, 0);
    const brieItem = new BrieItemStrategy(item);
    brieItem.updateQuality();
    expect(brieItem.getQuality()).toBe(2);
  });

  it("Quality can't be more than 50", () => {
    const item = new Item("Aged Brie", 1, 50);
    const brieItem = new BrieItemStrategy(item);
    brieItem.updateQuality();
    expect(brieItem.getQuality()).toBe(50);
  });
});

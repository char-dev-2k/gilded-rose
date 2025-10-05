import { BasicItemStrategy } from "@/models/BasicItemStrategy";
import { Item } from "@/gilded-rose";

describe("BasicItemStrategy", () => {

  const createItem = (sellIn: number, quality: number) => {
    return new Item("foo", sellIn, quality);
  };

  it("Sell in decreases by 1 every day", () => {
    const basicItem = new BasicItemStrategy(createItem(1, 0));
    basicItem.updateQuality();
    expect(basicItem.getSellIn()).toBe(0);
  });

  it("Sell in can be negative", () => {
    const basicItem = new BasicItemStrategy(createItem(0, 0));
    basicItem.updateQuality();
    expect(basicItem.getSellIn()).toBe(-1);
  });

  it("Quality decreases by 1 every day", () => {
    const basicItem = new BasicItemStrategy(createItem(1, 1));
    basicItem.updateQuality();
    expect(basicItem.getQuality()).toBe(0);
  });

  it("Quality can't be negative", () => {
    const basicItem = new BasicItemStrategy(createItem(1, 0));
    basicItem.updateQuality();
    expect(basicItem.getQuality()).toBe(0);
  });

  it("Expired normal items do not go below zero quality", () => {
    const basicItem = new BasicItemStrategy(createItem(0, 0));
    basicItem.updateQuality();
    expect(basicItem.getQuality()).toBe(0);
  });

  it("Expired items degrade twice as fast", () => {
    const basicItem = new BasicItemStrategy(createItem(0, 10));
    basicItem.updateQuality();
    expect(basicItem.getQuality()).toBe(8);
  });

});

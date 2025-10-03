import { BasicItemStrategy } from "@/models/BasicItemStrategy";
import { Item } from "@/gilded-rose";

describe("BasicItemStrategy", () => {
  it("Sell in decreases by 1 every day", () => {
    const item = new Item("foo", 1, 0);
    const basicItem = new BasicItemStrategy(item);
    basicItem.updateQuality();
    expect(basicItem.getSellIn()).toBe(0);
  });

  it("Sell in can be negative", () => {
    const item = new Item("foo", 0, 0);
    const basicItem = new BasicItemStrategy(item);
    basicItem.updateQuality();
    expect(basicItem.getSellIn()).toBe(-1);
  });

  it("Quality decreases by 1 every day", () => {
    const item = new Item("foo", 1, 1);
    const basicItem = new BasicItemStrategy(item);
    basicItem.updateQuality();
    expect(basicItem.getQuality()).toBe(0);
  });

  it("Quality can't be negative", () => {
    const item = new Item("foo", 1, 0);
    const basicItem = new BasicItemStrategy(item);
    basicItem.updateQuality();
    expect(basicItem.getQuality()).toBe(0);
  });

  it("Expired normal items do not go below zero quality", () => {
    const item = new Item("foo", 0, 0);
    const basicItem = new BasicItemStrategy(item);
    basicItem.updateQuality();
    expect(basicItem.getQuality()).toBe(0);
  });

  it("Expired items degrade twice as fast", () => {
    const item = new Item("foo", 0, 10);
    const basicItem = new BasicItemStrategy(item);
    basicItem.updateQuality();
    expect(basicItem.getQuality()).toBe(8);
  });
  
});

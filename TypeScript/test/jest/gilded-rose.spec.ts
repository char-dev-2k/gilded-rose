import { Item, GildedRose } from "@/gilded-rose";

describe("Gilded Rose", () => {
  describe("normal items", () => {
    it("Sell in decreases by 1 every day", () => {
      const gildedRose = new GildedRose([new Item("foo", 1, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(0);
    });

    it("Sell in can be negative", () => {
      const gildedRose = new GildedRose([new Item("foo", 0, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(-1);
    });

    it("Quality decreases by 1 every day", () => {
      const gildedRose = new GildedRose([new Item("foo", 1, 1)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
    });

    it("Quality can't be negative", () => {
      const gildedRose = new GildedRose([new Item("foo", 1, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
    });

    it("Expired normal items do not go below zero quality", () => {
      const gildedRose = new GildedRose([new Item("foo", 0, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
    });

    it("Expired items degrade twice as fast", () => {
      const gildedRose = new GildedRose([new Item("foo", 0, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(8);
    });
  });

  describe("aged brie", () => {
    it("Quality increases by 1 every day", () => {
      const gildedRose = new GildedRose([new Item("Aged Brie", 1, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(1);
    });

    it("Expired items increase twice as fast", () => {
      const gildedRose = new GildedRose([new Item("Aged Brie", 0, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(2);
    });

    it("Quality can't be more than 50", () => {
      const gildedRose = new GildedRose([new Item("Aged Brie", 1, 50)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(50);
    });
  });

  describe("sulfuras", () => {
    it("Sell in doesn't change", () => {
      const gildedRose = new GildedRose([
        new Item("Sulfuras, Hand of Ragnaros", 1, 80),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(1);
    });

    it("Quality doesn't change", () => {
      const gildedRose = new GildedRose([
        new Item("Sulfuras, Hand of Ragnaros", 1, 80),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(80);
    });

    it("Expired items don't change", () => {
      const gildedRose = new GildedRose([
        new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(80);
    });
  });

  describe("backstage passes", () => {
    it("Quality increases by 1 every day", () => {
      const gildedRose = new GildedRose([
        new Item("Backstage passes to a TAFKAL80ETC concert", 11, 0),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(1);
    });

    it("Quality increases by 2 when there are 10 or less days to sell", () => {
      const gildedRose = new GildedRose([
        new Item("Backstage passes to a TAFKAL80ETC concert", 10, 0),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(2);
    });

    it("Quality increases by 3 when there are 5 or less days to sell", () => {
      const gildedRose = new GildedRose([
        new Item("Backstage passes to a TAFKAL80ETC concert", 5, 0),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(3);
    });

    it("Quality can't be more than 50", () => {
      const gildedRose = new GildedRose([
        new Item("Backstage passes to a TAFKAL80ETC concert", 1, 50),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(50);
    });

    it("Quality drops to 0 after the concert", () => {
      const gildedRose = new GildedRose([
        new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
    });

    it("Expired items don't change", () => {
      const gildedRose = new GildedRose([
        new Item("Backstage passes to a TAFKAL80ETC concert", -1, 10),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
    });
  });
});

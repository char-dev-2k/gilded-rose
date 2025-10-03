import { ItemStrategy } from "./ItemStrategy";

export class BackstageItemStrategy extends ItemStrategy {
  updateQuality(): void {
    this.increaseQuality();

    if (this.item.sellIn <= 10) {
      this.increaseQuality();
    }

    if (this.item.sellIn <= 5) {
      this.increaseQuality();
    }

    this.decrementSellIn();

    if (this.item.sellIn < 0) {
      this.item.quality = 0;
    }
  }
}

import { ItemStrategy } from "./ItemStrategy";

export class BackstageItemStrategy extends ItemStrategy {
  updateQuality(): void {
    this.increaseQuality();

    if (this.getSellIn() <= 10) {
      this.increaseQuality();
    }

    if (this.getSellIn() <= 5) {
      this.increaseQuality();
    }

    this.decrementSellIn();

    if (this.getSellIn() < 0) {
      this.item.quality = 0;
    }
  }
}

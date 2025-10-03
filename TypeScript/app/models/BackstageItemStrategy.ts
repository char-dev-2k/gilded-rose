import { ItemStrategy } from "./ItemStrategy";

export class BackstageItemStrategy extends ItemStrategy {
  updateQuality(): void {
    this.increaseQuality();

    if (this.has10DaysOrLess()) {
      this.increaseQuality();
    }

    if (this.has5DaysOrLess()) {
      this.increaseQuality();
    }

    this.decrementSellIn();

    if (this.isExpired()) {
      this.setQuality(0)
    }
  }

  private has10DaysOrLess() {
    return this.getSellIn() <= 10
  }

  private has5DaysOrLess() {
    return this.getSellIn() <= 5
  }
}

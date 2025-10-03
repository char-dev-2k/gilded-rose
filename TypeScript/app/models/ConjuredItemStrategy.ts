import { ItemStrategy } from "./ItemStrategy";

export class ConjuredItemStrategy extends ItemStrategy {
  updateQuality(): void {
    this.decreaseQuality(2);
    this.decrementSellIn();

    if (this.isExpired()) {
      this.decreaseQuality(2);
    }
  }
}
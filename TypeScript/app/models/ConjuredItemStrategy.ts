import { ItemStrategy } from "./ItemStrategy";

export class ConjuredItemStrategy extends ItemStrategy {
  updateQuality(): void {
    this.decreaseQuality(2);
    this.decrementSellIn();

    if (this.getSellIn() < 0) {
      this.decreaseQuality(2);
    }
  }
}
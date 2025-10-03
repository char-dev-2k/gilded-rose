import { ItemStrategy } from "./ItemStrategy";

export class BasicItemStrategy extends ItemStrategy {
  updateQuality(): void {
    this.decreaseQuality();
    this.decrementSellIn();

    if (this.getSellIn() < 0) {
      this.decreaseQuality();
    }
  }
}

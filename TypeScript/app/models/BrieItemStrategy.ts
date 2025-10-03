import { ItemStrategy } from "./ItemStrategy";

export class BrieItemStrategy extends ItemStrategy {
  updateQuality(): void {
    this.increaseQuality();
    this.decrementSellIn();

    if (this.isExpired()) {
      this.increaseQuality();
    }
  }
}

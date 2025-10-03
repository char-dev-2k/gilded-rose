import { ItemStrategy } from "./ItemStrategy";

export class BrieItemStrategy extends ItemStrategy {
  updateQuality(): void {
    this.increaseQuality();
    this.decrementSellIn();

    if (this.getSellIn() < 0) {
      this.increaseQuality();
    }
  }
}

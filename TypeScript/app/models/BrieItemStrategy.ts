import { UpdatableItem } from "@/interfaces/UpdatableItem";
import { StoreItem } from "@/models/StoreItem";

export class BrieItemStrategy extends StoreItem implements UpdatableItem {
  updateQuality(): void {
    this.increaseQuality();
    this.decrementSellIn();

    if (this.isExpired()) {
      this.increaseQuality();
    }
  }
}

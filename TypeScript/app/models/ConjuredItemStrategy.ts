import { UpdatableItem } from "@/interfaces/UpdatableItem";
import { StoreItem } from "@/models/StoreItem";

export class ConjuredItemStrategy extends StoreItem implements UpdatableItem {
  updateQuality(): void {
    this.decreaseQuality(2);
    this.decrementSellIn();

    if (this.isExpired()) {
      this.decreaseQuality(2);
    }
  }
}
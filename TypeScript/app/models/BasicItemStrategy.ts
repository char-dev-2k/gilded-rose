import { UpdatableItem } from "@/interfaces/UpdatableItem";
import { StoreItem } from "@/models/StoreItem";

export class BasicItemStrategy extends StoreItem implements UpdatableItem {
  updateQuality(): void {
    this.decreaseQuality();
    this.decrementSellIn();

    if (this.isExpired()) {
      this.decreaseQuality();
    }
  }
}

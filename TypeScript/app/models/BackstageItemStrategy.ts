import { UpdatableItem } from "@/interfaces/UpdatableItem";
import { StoreItem } from "./StoreItem";

export class BackstageItemStrategy extends StoreItem implements UpdatableItem {
  updateQuality(): void {
    this.increaseQuality();

    if (this.hasLessOrEqualSellInDays(10)) {
      this.increaseQuality();
    }

    if (this.hasLessOrEqualSellInDays(5)) {
      this.increaseQuality();
    }

    this.decrementSellIn();

    if (this.isExpired()) {
      this.setQuality(0)
    }
  }

}

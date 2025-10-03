import { ItemStrategy } from "./ItemStrategy";

export class SulfurasItemStrategy extends ItemStrategy {
  updateQuality(): void {
    // Legendary items do not change.
  }
}

export function isUpdatableItem(item: any): item is UpdatableItem {
  return typeof (item as UpdatableItem).updateQuality === "function" && (item as UpdatableItem).updateQuality.length === 0;
}

export interface UpdatableItem {
  updateQuality(): void
}
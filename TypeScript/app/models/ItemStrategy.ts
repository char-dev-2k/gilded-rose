import type { Item } from "../gilded-rose";

export abstract class ItemStrategy {
    constructor(protected readonly item: Item) { }

    abstract updateQuality(): void;

    protected increaseQuality(amount: number = 1) {
        this.item.quality = Math.min(50, this.item.quality + amount);
    }

    protected decreaseQuality(amount: number = 1) {
        this.item.quality = Math.max(0, this.item.quality - amount);
    }

    protected decrementSellIn() {
        this.item.sellIn = this.item.sellIn - 1;
    }

    public getQuality() {
        return this.item.quality;
    }

    public getSellIn() {
        return this.item.sellIn;
    }
}

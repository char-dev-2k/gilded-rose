import type { Item } from "../gilded-rose";

export abstract class ItemStrategy {
    constructor(protected readonly item: Item) { }

    abstract updateQuality(): void;

    protected increaseQuality(amount: number = 1) {
        this.setQuality(Math.min(50, this.getQuality() + amount));
    }

    protected decreaseQuality(amount: number = 1) {
        this.setQuality(Math.max(0, this.getQuality() - amount));
    }

    protected decrementSellIn() {
        this.setSellIn(this.getSellIn() - 1);
    }

    protected isExpired() {
        return this.getSellIn() < 0;
    }

    public getQuality() {
        return this.item.quality;
    }

    public getSellIn() {
        return this.item.sellIn;
    }

    protected setQuality(quality: number) {
        this.item.quality = quality;
    }

    protected setSellIn(sellIn: number) {
        this.item.sellIn = sellIn;
    }
}

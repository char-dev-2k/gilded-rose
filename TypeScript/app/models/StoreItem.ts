import type { Item } from "../gilded-rose";

const MAX_QUALITY = 50;
const MIN_QUALITY = 0;

export class StoreItem {
    constructor(protected readonly item: Item) { }

    public increaseQuality(amount: number = 1, maxAmount: number = MAX_QUALITY) {
        if (amount <= 0) return
        this.setQuality(Math.min(maxAmount, this.getQuality() + amount));
    }

    public decreaseQuality(amount: number = 1, minAmount: number = MIN_QUALITY) {
        if (amount <= 0) return
        this.setQuality(Math.max(minAmount, this.getQuality() - amount));
    }

    public decrementSellIn(amount: number = 1) {
        if (amount <= 0) return
        this.setSellIn(this.getSellIn() - amount);
    }

    public hasLessOrEqualSellInDays(days: number) {
        return this.getSellIn() <= days;
    }

    public isExpired() {
        return this.getSellIn() < 0;
    }

    public getQuality() {
        return this.item.quality;
    }

    public getSellIn() {
        return this.item.sellIn;
    }

    public getName() {
        return this.item.name;
    }

    public setQuality(quality: number) {
        this.item.quality = quality;
    }

    public setSellIn(sellIn: number) {
        this.item.sellIn = sellIn;
    }
}


import { Item } from "@/gilded-rose";
import { StoreItem } from "@/models/StoreItem";

describe("StoreItem", () => {
    const createStoreItem = (sellIn: number, quality: number, name: string = "foo") => {
        return new StoreItem(new Item(name, sellIn, quality));
    };

    describe("increaseQuality", () => {
        it("increases quality by 1 by default without exceeding max", () => {
            const storeItem = createStoreItem(5, 49);
            storeItem.increaseQuality();
            expect(storeItem.getQuality()).toBe(50);
        });

        it("increases quality by a specified positive amount", () => {
            const storeItem = createStoreItem(5, 10);
            storeItem.increaseQuality(5);
            expect(storeItem.getQuality()).toBe(15);
        });

        it("does not exceed the provided maximum quality", () => {
            const storeItem = createStoreItem(5, 45);
            storeItem.increaseQuality(10, 47);
            expect(storeItem.getQuality()).toBe(47);
        });

        it("ignores non-positive increase amounts", () => {
            const storeItem = createStoreItem(5, 10);
            storeItem.increaseQuality(0);
            storeItem.increaseQuality(-3);
            expect(storeItem.getQuality()).toBe(10);
        });
    });

    describe("decreaseQuality", () => {
        it("decreases quality by 1 by default without going below min", () => {
            const storeItem = createStoreItem(5, 1);
            storeItem.decreaseQuality();
            expect(storeItem.getQuality()).toBe(0);
        });

        it("decreases quality by a specified positive amount", () => {
            const storeItem = createStoreItem(5, 10);
            storeItem.decreaseQuality(4);
            expect(storeItem.getQuality()).toBe(6);
        });

        it("does not drop below the provided minimum quality", () => {
            const storeItem = createStoreItem(5, 5);
            storeItem.decreaseQuality(10, 3);
            expect(storeItem.getQuality()).toBe(3);
        });

        it("ignores non-positive decrease amounts", () => {
            const storeItem = createStoreItem(5, 10);
            storeItem.decreaseQuality(0);
            storeItem.decreaseQuality(-2);
            expect(storeItem.getQuality()).toBe(10);
        });
    });

    describe("decrementSellIn", () => {
        it("defaults to decreasing sellIn by 1", () => {
            const storeItem = createStoreItem(3, 10);
            storeItem.decrementSellIn();
            expect(storeItem.getSellIn()).toBe(2);
        });

        it("decreases sellIn by the specified amount", () => {
            const storeItem = createStoreItem(3, 10);
            storeItem.decrementSellIn(4);
            expect(storeItem.getSellIn()).toBe(-1);
        });

        it("ignores non-positive sellIn amounts", () => {
            const storeItem = createStoreItem(3, 10);
            storeItem.decrementSellIn(-2);
            expect(storeItem.getSellIn()).toBe(3);
        });
    });

    describe("hasLessOrEqualSellInDays", () => {
        it("returns true when sellIn equals the provided days", () => {
            const storeItem = createStoreItem(5, 10);
            expect(storeItem.hasLessOrEqualSellInDays(5)).toBe(true);
        });

        it("returns false when sellIn is greater than the provided days", () => {
            const storeItem = createStoreItem(6, 10);
            expect(storeItem.hasLessOrEqualSellInDays(5)).toBe(false);
        });
    });

    describe("isExpired", () => {
        it("returns false when sellIn is zero", () => {
            const storeItem = createStoreItem(0, 10);
            expect(storeItem.isExpired()).toBe(false);
        });

        it("returns true when sellIn is negative", () => {
            const storeItem = createStoreItem(-1, 10);
            expect(storeItem.isExpired()).toBe(true);
        });
    });

    describe("getQuality", () => {
        it("returns the current quality", () => {
            const storeItem = createStoreItem(5, 42);
            expect(storeItem.getQuality()).toBe(42);
        });
    });

    describe("getSellIn", () => {
        it("returns the current sellIn", () => {
            const storeItem = createStoreItem(7, 10);
            expect(storeItem.getSellIn()).toBe(7);
        });
    });

    describe("getName", () => {
        it("returns the item name", () => {
            const storeItem = createStoreItem(5, 10, "My Item");
            expect(storeItem.getName()).toBe("My Item");
        });
    });

    describe("setQuality", () => {
        it("updates the quality to the provided value", () => {
            const storeItem = createStoreItem(5, 10);
            storeItem.setQuality(25);
            expect(storeItem.getQuality()).toBe(25);
        });
    });

    describe("setSellIn", () => {
        it("updates the sellIn to the provided value", () => {
            const storeItem = createStoreItem(5, 10);
            storeItem.setSellIn(12);
            expect(storeItem.getSellIn()).toBe(12);
        });
    });
});



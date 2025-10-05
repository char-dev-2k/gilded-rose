import { isUpdatableItem } from "@/interfaces/UpdatableItem";

describe("isUpdatableItem", () => {
    it("Returns true for items having updateQuality method with correct signature", () => {
        const updatableItem = { updateQuality: () => null }
        expect(isUpdatableItem(updatableItem)).toBeTruthy()
    })

    it("Returns false having updateQuality method with incorrect signature", () => {
        const nonUpdatableItem = { updateQuality: (str: string) => null }
        expect(isUpdatableItem(nonUpdatableItem)).toBeFalsy()
    })

    it("Returns false for items not having updateQuality method", () => {
        const nonUpdatableItem = {}
        expect(isUpdatableItem(nonUpdatableItem)).toBeFalsy()
    })

    it("Returns false for items having a property with name updateQuality ", () => {
        const nonUpdatableItem = { updateQuality: "not a function" }
        expect(isUpdatableItem(nonUpdatableItem)).toBeFalsy()
    })

})
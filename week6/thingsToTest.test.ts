import {add, arrayReturnOnlyEvens, boolean, copyProduct} from "./thingsToTest";

describe('add', () => {
    // write tests for the add function
		it("add two positive numbers together", () => {
			expect(add(1,2)).toEqual(3);
		})
		it("adds two negative numbers", () => {
			expect(add(-1,-2)).toEqual(-3);
		})
});

describe ('boolean', () => {
    // write tests for the boolean function
		it("returns a truthy boolean", () => {
			expect(boolean(true)).toBeTruthy();
		})
		it("returns a falsy boolean", () => {
			expect(boolean(false)).toBeFalsy();
		})
});


describe('arrayReturnOnlyEvens', () => {
    //write tests for the arrayReturnOnlyEvens function
		// export const arrayReturnOnlyEvens = (x: number[]) => x.filter(x => x % 2 === 0);

		it("returns only evens from array", () => {
			const arr = [1,2,3,4];
			expect(arrayReturnOnlyEvens(arr)).toEqual([2,4]);
		})
});


describe("copyProduct", function () {
    // check that the two objects have the same values
    // check that the objects don't have the same reference
    // (they may equal the same, but they are not the same object)
		// export const copyProduct = (product: Object) => { return {...product}};

		it ("checking two objects have same values", () => {
			const heera = {name: "Heera"};
			const cp = copyProduct(heera);
			expect(cp).toEqual(heera);
			expect(cp).not.toBe(heera);
		})
});

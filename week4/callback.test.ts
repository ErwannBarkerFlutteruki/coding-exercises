import {
  findAllEvens,
  sumArrayElements
} from "./callback";

describe("findAllEvens", function () {
  it("find the first even number", () => {
    expect(findAllEvens([5, 4, 3, 2, 1, 0])).toEqual([4,2,0]);
  });

  it("find the first even number with negative", () => {
    expect(findAllEvens([5, 3, -2, 1, 0])).toEqual([-2,0]);
  });
  it("find the first even number when it's 0", () => {
    expect(findAllEvens([5, 23, 1, 0, 11, 21])).toEqual([0]);
  });
});


describe("sumArrayElements", function () {
  it("sum up array", () => {
    expect(sumArrayElements([5, 4, 3, 2, 1, 0])).toEqual(15);
  });

  it("sum up array with nagatives", () => {
    expect(sumArrayElements([-5, 4, -3, 2, -1, 0])).toEqual(-3);
  });
});
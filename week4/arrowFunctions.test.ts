import {
  add,
  doubleIfNumber,
} from "./arrowFunctions";


describe("add", function () {
  it("adds two numbers together", () => {
    expect(add(5, 55)).toEqual(60);
  });

  it("adds two numbers together of which one is negative", () => {
    expect(add(5, -55)).toEqual(-50);
  });
});


describe("doubleIfNumber", function () {
  it("input is an int", () => {
    expect(doubleIfNumber(5)).toEqual(10);
  });

  it("number is a string", () => {
    expect(doubleIfNumber("5")).toEqual(false);
  });

  it("not a number", () => {
    expect(doubleIfNumber("a5")).toEqual(false);
  });

  it("is a boolean", () => {
    expect(doubleIfNumber(true)).toEqual(false);
  });
});
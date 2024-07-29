import {
  countdown,
  findFirstEven,
  sumArrayElements,
  reverseString,
  filterEvenNumbers,
  printObjectProperties
} from "./loops";


describe("countdown", function () {
  it("counts down from 5", () => {
    expect(countdown(5)).toEqual([5, 4, 3, 2, 1, 0]);
  });
  it("doesn't error on negative number", () => {
    expect(countdown(-1)).toEqual([]);
  });
  it("counts down when 0 is passed", () => {
    expect(countdown(0)).toEqual([0]);
  });
});

describe("findFirstEven", function () {
  it("find the first even number", () => {
    expect(findFirstEven([5, 4, 3, 2, 1, 0])).toEqual(4);
  });

  it("find the first even number with negative", () => {
    expect(findFirstEven([5, 3, -2, 1, 0])).toEqual(-2);
  });
  it("find the first even number when it's 0", () => {
    expect(findFirstEven([5, 23, 1, 0, 11, 21])).toEqual(0);
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

describe("reverseString", function () {
  it("reverse string", () => {
    expect(reverseString('abba')).toEqual('abba');
  });

  it("reverse string 2", () => {
    expect(reverseString('reverse')).toEqual('esrever');
  });
  it("reverse string with numbers", () => {
    expect(reverseString('123405')).toEqual('504321');
  });
});

describe("filterEvenNumbers", function () {
  it("filter out odd numbers", () => {
    expect(filterEvenNumbers([1,2,3,4,5,6])).toEqual([2,4,6]);
  });

  it("filter out odd numbers extended", () => {
    expect(filterEvenNumbers([12, 21, 3, 4, 5, 6])).toEqual([12, 4, 6]);
  });

  it("filter out odd numbers with negatives", () => {
    expect(filterEvenNumbers([-12, 21, 3, 4, -5, 6])).toEqual([-12, 4, 6]);
  });

  it("filter out odd numbers with 0", () => {
    expect(filterEvenNumbers([0])).toEqual([0]);
  });
});

describe("returnObjectPropertiesAsArray", function () {
  it("filter out odd numbers", () => {
    expect(returnObjectPropertiesAsArray({name: 'bob', age: 70, dob: '1997'})).toEqual(['bob', 70, '1997']);
  });
});
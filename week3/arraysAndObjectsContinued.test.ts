import {
  getEvenNums,
  getWordLengths,
  getMiddleNames,
  getPugNames,
  createUser,
  modifyBook,
  copyProduct,
  checkGardenForSunflowers,
} from "./arraysAndObjectsContinued";

describe("getEvenNums", function () {
  it("returns [] when passed []", function () {
    expect(getEvenNums([])).toEqual([]);
  });
  it("returns [2, 4, 6] when passed [1, 2, 3, 4, 5, 6]", function () {
    expect(getEvenNums([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
  });
  it("returns [] when passed [1, 3, 5, 7, 99]", function () {
    expect(getEvenNums([1, 3, 5, 7, 99])).toEqual([]);
  });
  it("returns [2, 2, 2, 2] when passed [1, 2, 2, 5, 2, 87, 2]", function () {
    expect(getEvenNums([1, 2, 2, 5, 2, 87, 2])).toEqual([2, 2, 2, 2]);
  });
  it("returns [4, 4, 4] when passed [4, 4, 4]", function () {
    expect(getEvenNums([4, 4, 4])).toEqual([4, 4, 4]);
  });
  it("returns [88, 62, 10] when passed [1, 3, 88, 99, 62, 10]", function () {
    expect(getEvenNums([1, 3, 88, 99, 62, 10])).toEqual([88, 62, 10]);
  });
});

describe("getWordLengths", function () {
  it('returns [] when passed ""', function () {
    expect(getWordLengths("")).toEqual([]);
  });
  it('returns [5, 5] when passed "hello world"', function () {
    expect(getWordLengths("hello world")).toEqual([5, 5]);
  });
  it('returns [4, 1, 6, 4, 8, 5] when passed "like a bridge over troubled water"', function () {
    expect(getWordLengths("like a bridge over troubled water")).toEqual([
      4, 1, 6, 4, 8, 5,
    ]);
  });
  it('returns [6, 2, 5, 3] when passed "coding is great fun"', function () {
    expect(getWordLengths("coding is great fun")).toEqual([6, 2, 5, 3]);
  });
  it('returns [9, 3, 5, 4, 5] when passed "pineapple and black bean curry"', function () {
    expect(getWordLengths("pineapple and black bean curry")).toEqual([
      9, 3, 5, 4, 5,
    ]);
  });
  it('returns [5] when passed "woooo"', function () {
    expect(getWordLengths("woooo")).toEqual([5]);
  });
});

describe("getMiddleNames", function () {
  it("returns [] when passed []", function () {
    expect(getMiddleNames([])).toEqual([]);
  });
  it('returns ["Hannah"] when passed ["Caroline Hannah Jamieson"]', function () {
    expect(getMiddleNames(["Caroline Hannah Jamieson"])).toEqual(["Hannah"]);
  });
  it('returns ["Reuben", "Keith", "Clara"] when passed ["Steven Reuben Williams", "Carl Keith Morelli", "Sissel Clara Blomqvist"]', function () {
    expect(
      getMiddleNames([
        "Steven Reuben Williams",
        "Carl Keith Morelli",
        "Sissel Clara Blomqvist",
      ])
    ).toEqual(["Reuben", "Keith", "Clara"]);
  });
  it('returns ["Reuben", null, "Clara"] when passed ["Steven Reuben Williams", "Carl Morelli", "Sissel Clara Blomqvist"]', function () {
    expect(
      getMiddleNames([
        "Steven Reuben Williams",
        "Carl Morelli",
        "Sissel Clara Blomqvist",
      ])
    ).toEqual(["Reuben", null, "Clara"]);
  });
  it('returns ["Reuben", null, null] when passed ["Steven Reuben Williams", "Carl Morelli", "Sissel"]', function () {
    expect(
      getMiddleNames(["Steven Reuben Williams", "Carl Morelli", "Sissel"])
    ).toEqual(["Reuben", null, null]);
  });
});

describe("getPugNames", function () {
  it("returns [] when passed []", function () {
    expect(getPugNames([])).toEqual([]);
  });
  it("returns an array of pug names when passed an array of dog objects", function () {
    const dogs = [
      { name: "Beatrice", breed: "Lurcher" },
      { name: "Max", breed: "Pug" },
      { name: "Poppy", breed: "Pug" },
    ];
    expect(getPugNames(dogs)).toEqual(["Max", "Poppy"]);
    const dogs2 = [
      { name: "Steven", breed: "Lurcher" },
      { name: "Daphne", breed: "Pug" },
      { name: "Sandy", breed: "Labrador" },
      { name: "Mike", breed: "Pug" },
      { name: "Spike", breed: "Pug" },
    ];
    expect(getPugNames(dogs2)).toEqual(["Daphne", "Mike", "Spike"]);
    const dogs3 = [
      { name: "Kevin", breed: "Labrador" },
      { name: "Patch", breed: "Rottweiler" },
      { name: "Miles", breed: "Lurcher" },
      { name: "Sandy", breed: "Pug" },
      { name: "Spot", breed: "Pug" },
      { name: "Josephine", breed: "Terrier" },
      { name: "Eric", breed: "Pug" },
    ];
    expect(getPugNames(dogs3)).toEqual(["Sandy", "Spot", "Eric"]);
  });
});

describe("createUser", function () {
  it("returns object with name and age", function () {
    expect(createUser()).toEqual({ name: "Joan", age: 70 });
  });
});

describe("modifyBook", function () {
  it("adds a genre property to the passed book set to the passed genre", function () {
    const book = {
      title: "Alice`s Adventures in Wonderland",
      author: "Lewis Carroll",
    };
    let newBook = modifyBook(book, "fiction");
    expect(newBook).toEqual({
      title: "Alice`s Adventures in Wonderland",
      author: "Lewis Carroll",
      genre: "fiction",
    });
    newBook = modifyBook(book, "fantasy");
    expect(newBook).toEqual({
      title: "Alice`s Adventures in Wonderland",
      author: "Lewis Carroll",
      genre: "fantasy",
    });
  });
});

describe("copyProduct", function () {
  it("creates a shallow copy of an object", () => {
    let original = { item: "Olive Oil", price: 4.95 };

    expect(copyProduct(original)).toEqual(original);
    expect(copyProduct(original)).not.toBe(original);
  });
});

describe("checkGardenForSunflowers", function () {
  it("returns true when passed object with sunflowers", function () {
    expect(
      checkGardenForSunflowers({
        sunflowers: "orange",
      })
    ).toEqual(true);
    expect(
      checkGardenForSunflowers({
        roses: "white",
        tulips: "red",
        dahlias: "pink",
        sunflowers: "yellow",
      })
    ).toEqual(true);
    expect(
      checkGardenForSunflowers({
        roses: "white",
        tulips: "red",
        dahlias: "pink",
        iris: "purple",
      })
    ).toEqual(false);
    expect(
      checkGardenForSunflowers({
        roses: "white",
        tulips: "red",
        dahlias: "pink",
      })
    ).toEqual(false);
  });
});

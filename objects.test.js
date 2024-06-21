import {
  getYearOfBirth,
  isOver40,
  createProduct,
  addPriceToProduct,
  createCoder,
  getAlbumProperties,
  getAlbumValues,
  countKeys,
  addBandName,
  deletePassword,
  countTheObjects,
} from "./objects";

describe("getYearOfBirth", function () {
  it("returns the year of birth of a user with a yearOfBirth property", function () {
    expect(getYearOfBirth({ yearOfBirth: 1950 })).toEqual(1950);
  });
});

describe("isOver40", function () {
  it("returns true if the user is over 40", function () {
    expect(isOver40({ age: 55 })).toBe(true);
    expect(isOver40({ age: 41 })).toBe(true);
    expect(isOver40({ age: 107 })).toBe(true);
    expect(isOver40({ age: 999 })).toBe(true);
  });
  it("returns false if the user is 40 or younger", function () {
    expect(isOver40({ age: 40 })).toBe(false);
    expect(isOver40({ age: 4 })).toBe(false);
    expect(isOver40({ age: 10 })).toBe(false);
    expect(isOver40({ age: 29 })).toBe(false);
  });
});

describe("createProduct", function () {
  it("should create the expected product", function () {
    expect(createProduct()).toHaveProperty("type");
    expect(createProduct()).toHaveProperty("price");
    expect(typeof createProduct().price).toBe("number");
    expect(typeof createProduct().type).toBe("string");
  });
});

describe("addPriceToProduct", () => {
  it("adds a price property to the passed product set to the passed price", () => {
    const product = {
      type: "Tofu slices",
    };
    let newProduct = addPriceToProduct(product, 1.25);
    expect(newProduct).toEqual({ type: "Tofu slices", price: 1.25 });
    newProduct = addPriceToProduct(product, 1.35);
    expect(newProduct).toEqual({ type: "Tofu slices", price: 1.35 });
  });
});

describe("createCoder", () => {
  it("returns an object with a 'name' property set to the passed name argument", () => {
    const coder = createCoder("Mauro");
    expect(coder).toHaveProperty("name");
    expect(coder.name).toEqual("Mauro");
  });
  it("returns an object with an 'age' property set to the user's age in the year 2017 according to the passed yearOfBirth argument", () => {
    const coder = createCoder("Mauro", 1989);
    expect(coder).toHaveProperty("age");
    expect(coder.age).toEqual(28);
  });
  it("returns an object with a 'language' property set to JavaScript", () => {
    const coder = createCoder("Mauro", 1989);
    expect(coder).toHaveProperty("language");
    expect(coder.language).toEqual("JavaScript");
  });
});

describe("getAlbumProperties", () => {
  it("returns an array of the album's keys", () => {
    const input = {
      title: "Pablo Honey",
      yearReleased: 1993,
      producer: "Nigel Godrich",
    };
    const actual = getAlbumProperties(input);
    const expected = ["title", "yearReleased", "producer"];
    expect(actual).toEqual(expected);
  });
});

describe("getAlbumValues", () => {
  it("returns an array of the album's values", () => {
    const input = {
      title: "Pablo Honey",
      yearReleased: 1993,
      producer: "Nigel Godrich",
    };
    const actual = getAlbumValues(input);
    const expected = ["Pablo Honey", 1993, "Nigel Godrich"];
    expect(actual).toEqual(expected);
  });
});

describe("countKeys", function () {
  it("counts the keys on an object", function () {
    expect(countKeys({})).toEqual(0);
    expect(countKeys({ a: 6 })).toEqual(1);
    expect(countKeys({ a: 1, b: 2 })).toEqual(2);
    expect(countKeys({ a: 1, b: 2, c: 4, d: 7 })).toEqual(4);
  });
});

describe("addBandName", () => {
  it('adds a "bandName" property with a value of "Radiohead" to a single object in an array', () => {
    const input = [
      {
        title: "Pablo Honey",
        yearReleased: 1993,
        producer: "Nigel Godrich",
      },
    ];
    const actual = addBandName(input);
    const expected = [
      {
        bandName: "Radiohead",
        title: "Pablo Honey",
        yearReleased: 1993,
        producer: "Nigel Godrich",
      },
    ];
    expect(actual).toEqual(expected);
  });
  it('adds a "bandName" property with a value of "Radiohead" to several objects in an array', () => {
    const input = [
      {
        title: "Pablo Honey",
        yearReleased: 1993,
        producer: "Nigel Godrich",
      },
      {
        title: "The Bends",
        yearReleased: 1995,
        producer: "Nigel Godrich",
      },
    ];
    const actual = addBandName(input);
    const expected = [
      {
        title: "Pablo Honey",
        bandName: "Radiohead",
        yearReleased: 1993,
        producer: "Nigel Godrich",
      },
      {
        title: "The Bends",
        bandName: "Radiohead",
        yearReleased: 1995,
        producer: "Nigel Godrich",
      },
    ];
    expect(actual).toEqual(expected);
  });
});

describe("deletePassword", function () {
  it("deletes the password key/value pair from a user object", function () {
    expect(deletePassword({ name: "foo", password: "cat" })).toEqual({
      name: "foo",
    });
    expect(deletePassword({ name: "bar", password: "secretsecret" })).toEqual({
      name: "bar",
    });
    expect(
      deletePassword({
        name: "claire",
        username: "claire1988",
        password: "pineapple",
      })
    ).toEqual({ name: "claire", username: "claire1988" });
  });
});

describe("countTheObjects", function () {
  it("returns the count of objects inside an array of random data types", function () {
    expect(countTheObjects([])).toEqual(0);
    expect(countTheObjects([1, 3, 4, 5])).toEqual(0);
    expect(countTheObjects([1, 3, 4, 5, "foo"])).toEqual(0);
    expect(countTheObjects([1, 3, 4, 5, {}, {}, {}, "foo"])).toEqual(3);
    expect(countTheObjects([1, [], 3, 4, 5, {}, {}, {}, "foo"])).toEqual(3);
    expect(countTheObjects([1, [], null, 3, 4, 5, {}, {}, {}, "foo"])).toEqual(
      3
    );
    expect(
      countTheObjects([
        1,
        {},
        [],
        null,
        null,
        "foo",
        3,
        4,
        5,
        {},
        {},
        {},
        "foo",
      ])
    ).toEqual(4);
  });
});

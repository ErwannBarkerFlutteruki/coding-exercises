import {
  getMiddleNames,
  getPugNames,
} from "./arraysAndObjectsContinued";


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


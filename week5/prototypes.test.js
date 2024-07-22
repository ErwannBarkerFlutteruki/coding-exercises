import {
  thirdChar,
  mergeWords,
  stringContains,
  stringSize,
  convertStringToArray,
  arraySize,
  addToArray,
  removeLastElementFromArray,
  modifyElementsInArray,
  getKeys,
  getValues,
  hasOwnProp
} from "./prototypes";


describe("string", () => {
  it("return third char", () => {
    expect(thirdChar('123')).toEqual('3');
    expect(thirdChar('string')).toEqual('r');
  });

  it("merge worods", () => {
    expect(mergeWords('I am', ' groot')).toEqual('I am groot');
  });

  it("stringContains", () => {
    expect(stringContains('find this word', 'this')).toEqual(true);
    expect(stringContains('find this word', 'not this')).toEqual(false);
  })

  it("stringSize", () => {
    expect(stringSize('12345')).toEqual(5);
    expect(stringSize('wubadubdub')).toEqual(10);
  })

  it("convertStringToArray", () => {
    expect(convertStringToArray('split up by space', ' ')).toEqual(['split', 'up', 'by', 'space']);
    expect(convertStringToArray('split', '')).toEqual(['s', 'p', 'l', 'i', 't']);
  });
});





describe("arrays", () => {

  it("array size", () => {
    expect(arraySize([1,3,4,5,6])).toEqual(5);
  })
  it('adds an element to the end of the array', () => {
    const arr = [1, 2, 3];
    const result = addToArray(arr, 4);
    expect(result).toEqual([1, 2, 3, 4]);
  });
  it('removes the last element from the array', () => {
    const arr = [1, 2, 3];
    const result = removeLastElementFromArray(arr);
    expect(result).toBe(3);
    expect(arr).toEqual([1, 2]);
  });
  it('maps each element to double its value', () => {
    const arr = [1, 2, 3];
    const result = modifyElementsInArray(arr, x => x * 2);
    expect(result).toEqual([2, 4, 6]);
  });
});


describe('Objects', () => {
  it('checks if object has own property', () => {
    const obj = { name: 'Alice', age: 25 };
    expect(hasOwnProp(obj, 'name')).toBe(true);
    expect(hasOwnProp(obj, 'gender')).toBe(false);
  });

  it('gets keys of the object', () => {
    const obj = { name: 'Alice', age: 25 };
    expect(getKeys(obj)).toEqual(['name', 'age']);
  });

  it('gets values of the object', () => {
    const obj = { name: 'Alice', age: 25 };
    expect(getValues(obj)).toEqual(['Alice', 25]);
  });
})
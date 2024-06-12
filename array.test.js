import {
  pushElementOnToArray,
  popElementOffArray,
  shiftElementOffArray,
  getArrayLength,
  getIndexOfStringInArray,
  sortArrayOfNumbersFromHighToLow,
  returnArrayOfNumbersDoubled,
  returnArrayOfOnlyEvenNumbers,
  returnSumOfAllNumbersInArray
} from './array';

// Test 1: Adding a number to an empty array
test('adds a number to an empty array', () => {
  const arr = [];
  expect(pushElementOnToArray(arr, 1)).toEqual([1]);
});

// Test 2: Adding a string to an empty array
test('adds a string to an empty array', () => {
  const arr = [];
  expect(pushElementOnToArray(arr, 'hello')).toEqual(['hello']);
});

// Test 3: Adding an object to an empty array
test('adds an object to an empty array', () => {
  const arr = [];
  expect(pushElementOnToArray(arr, { key: 'value' })).toEqual([{ key: 'value' }]);
});

// Test 4: Adding an array to an empty array
test('adds an array to an empty array', () => {
  const arr = [];
  expect(pushElementOnToArray(arr, [1, 2, 3])).toEqual([[1, 2, 3]]);
});

// Test 5: Adding a boolean to an empty array
test('adds a boolean to an empty array', () => {
  const arr = [];
  expect(pushElementOnToArray(arr, true)).toEqual([true]);
});

// Test 6: Adding multiple elements to a non-empty array
test('adds multiple elements to a non-empty array', () => {
  const arr = [4, 5];
  expect(pushElementOnToArray(arr, 6)).toEqual([4, 5, 6]);
  expect(pushElementOnToArray(arr, 'seven')).toEqual([4, 5, 6, 'seven']);
});

// Test 1: Removing the last element from an array with one element
test('removes the last element from an array with one element', () => {
  const arr = [1];
  expect(popElementOffArray(arr)).toBe(1);
  expect(arr).toEqual([]);
});

// Test 2: Removing the last element from an array with multiple elements
test('removes the last element from an array with multiple elements', () => {
  const arr = [1, 2, 3];
  expect(popElementOffArray(arr)).toBe(3);
  expect(arr).toEqual([1, 2]);
});

// Test 3: Removing the last element from an array with different types
test('removes the last element from an array with different types', () => {
  const arr = [1, 'hello', true];
  expect(popElementOffArray(arr)).toBe(true);
  expect(arr).toEqual([1, 'hello']);
});

// Test 4: Removing the last element from an array with an object
test('removes the last element from an array with an object', () => {
  const arr = [{ key: 'value' }];
  expect(popElementOffArray(arr)).toEqual({ key: 'value' });
  expect(arr).toEqual([]);
});

// Test 5: Removing the last element from an empty array
test('removes the last element from an empty array', () => {
  const arr = [];
  expect(popElementOffArray(arr)).toBeUndefined();
  expect(arr).toEqual([]);
});

// Test 6: Removing elements successively from an array
test('removes elements successively from an array', () => {
  const arr = [1, 2, 3];
  expect(popElementOffArray(arr)).toBe(3);
  expect(arr).toEqual([1, 2]);
  expect(popElementOffArray(arr)).toBe(2);
  expect(arr).toEqual([1]);
  expect(popElementOffArray(arr)).toBe(1);
  expect(arr).toEqual([]);
});

// Test 1: Removing the first element from an array with one element
test('removes the first element from an array with one element', () => {
  const arr = [1];
  expect(shiftElementOffArray(arr)).toBe(1);
  expect(arr).toEqual([]);
});

// Test 2: Removing the first element from an array with multiple elements
test('removes the first element from an array with multiple elements', () => {
  const arr = [1, 2, 3];
  expect(shiftElementOffArray(arr)).toBe(1);
  expect(arr).toEqual([2, 3]);
});

// Test 3: Removing the first element from an array with different types
test('removes the first element from an array with different types', () => {
  const arr = [1, 'hello', true];
  expect(shiftElementOffArray(arr)).toBe(1);
  expect(arr).toEqual(['hello', true]);
});

// Test 4: Removing the first element from an array with an object
test('removes the first element from an array with an object', () => {
  const arr = [{ key: 'value' }];
  expect(shiftElementOffArray(arr)).toEqual({ key: 'value' });
  expect(arr).toEqual([]);
});

// Test 5: Removing the first element from an empty array
test('removes the first element from an empty array', () => {
  const arr = [];
  expect(shiftElementOffArray(arr)).toBeUndefined();
  expect(arr).toEqual([]);
});

// Test 6: Removing elements successively from an array
test('removes elements successively from an array', () => {
  const arr = [1, 2, 3];
  expect(shiftElementOffArray(arr)).toBe(1);
  expect(arr).toEqual([2, 3]);
  expect(shiftElementOffArray(arr)).toBe(2);
  expect(arr).toEqual([3]);
  expect(shiftElementOffArray(arr)).toBe(3);
  expect(arr).toEqual([]);
});

// Test 1: Getting the length of an empty array
test('gets the length of an empty array', () => {
  const arr = [];
  expect(getArrayLength(arr)).toBe(0);
});

// Test 2: Getting the length of an array with one element
test('gets the length of an array with one element', () => {
  const arr = [1];
  expect(getArrayLength(arr)).toBe(1);
});

// Test 3: Getting the length of an array with multiple elements
test('gets the length of an array with multiple elements', () => {
  const arr = [1, 2, 3];
  expect(getArrayLength(arr)).toBe(3);
});

// Test 4: Getting the length of an array with different types
test('gets the length of an array with different types', () => {
  const arr = [1, 'hello', true];
  expect(getArrayLength(arr)).toBe(3);
});

// Test 5: Getting the length of an array with nested arrays
test('gets the length of an array with nested arrays', () => {
  const arr = [[1, 2], [3, 4]];
  expect(getArrayLength(arr)).toBe(2);
});

// Test 6: Getting the length of an array with objects
test('gets the length of an array with objects', () => {
  const arr = [{ key1: 'value1' }, { key2: 'value2' }];
  expect(getArrayLength(arr)).toBe(2);
});

// Test 1: Finding the index of a string in an array with one element
test('finds the index of a string in an array with one element', () => {
  const arr = ['hello'];
  expect(getIndexOfStringInArray(arr, 'hello')).toBe(0);
});

// Test 2: Finding the index of a string in an array with multiple elements
test('finds the index of a string in an array with multiple elements', () => {
  const arr = ['a', 'b', 'c'];
  expect(getIndexOfStringInArray(arr, 'b')).toBe(1);
});

// Test 3: Finding the index of a string not in the array
test('returns -1 for a string not in the array', () => {
  const arr = ['a', 'b', 'c'];
  expect(getIndexOfStringInArray(arr, 'd')).toBe(-1);
});

// Test 4: Finding the index of a string in an array with multiple occurrences
test('finds the first occurrence of a string in an array with multiple occurrences', () => {
  const arr = ['a', 'b', 'a'];
  expect(getIndexOfStringInArray(arr, 'a')).toBe(0);
});

// Test 5: Finding the index of a string in an array with different types
test('finds the index of a string in an array with different types', () => {
  const arr = [1, 'hello', true];
  expect(getIndexOfStringInArray(arr, 'hello')).toBe(1);
});

// Test 6: Finding the index of a string in an empty array
test('returns -1 for a string in an empty array', () => {
  const arr = [];
  expect(getIndexOfStringInArray(arr, 'hello')).toBe(-1);
});

// Test 1: Sorting an array of numbers in descending order
test('sorts an array of numbers in descending order', () => {
  const arr = [3, 1, 4, 1, 5, 9];
  expect(sortArrayOfNumbersFromHighToLow(arr)).toEqual([9, 5, 4, 3, 1, 1]);
});

// Test 2: Sorting an already sorted array in descending order
test('sorts an already sorted array in descending order', () => {
  const arr = [9, 5, 4, 3, 1, 1];
  expect(sortArrayOfNumbersFromHighToLow(arr)).toEqual([9, 5, 4, 3, 1, 1]);
});

// Test 1: Doubling an array of positive numbers
test('doubles an array of positive numbers', () => {
  const arr = [1, 2, 3];
  expect(returnArrayOfNumbersDoubled(arr)).toEqual([2, 4, 6]);
});

// Test 2: Doubling an array of negative numbers
test('doubles an array of negative numbers', () => {
  const arr = [-1, -2, -3];
  expect(returnArrayOfNumbersDoubled(arr)).toEqual([-2, -4, -6]);
});

// Test 3: Doubling an array with both positive and negative numbers
test('doubles an array with both positive and negative numbers', () => {
  const arr = [-1, 0, 1];
  expect(returnArrayOfNumbersDoubled(arr)).toEqual([-2, 0, 2]);
});

// Test 4: Doubling an array with zeros
test('doubles an array with zeros', () => {
  const arr = [0, 0, 0];
  expect(returnArrayOfNumbersDoubled(arr)).toEqual([0, 0, 0]);
});

// Test 5: Doubling an empty array
test('doubles an empty array', () => {
  const arr = [];
  expect(returnArrayOfNumbersDoubled(arr)).toEqual([]);
});

// Test 6: Doubling an array with one element
test('doubles an array with one element', () => {
  const arr = [5];
  expect(returnArrayOfNumbersDoubled(arr)).toEqual([10]);
});


// Test 1: Filtering an array of positive numbers
test('filters an array of positive numbers to include only even numbers', () => {
  const arr = [1, 2, 3, 4, 5, 6];
  expect(returnArrayOfOnlyEvenNumbers(arr)).toEqual([2, 4, 6]);
});

// Test 2: Filtering an array of negative numbers
test('filters an array of negative numbers to include only even numbers', () => {
  const arr = [-1, -2, -3, -4];
  expect(returnArrayOfOnlyEvenNumbers(arr)).toEqual([-2, -4]);
});

// Test 3: Filtering an array with both positive and negative numbers
test('filters an array with both positive and negative numbers to include only even numbers', () => {
  const arr = [-2, -1, 0, 1, 2];
  expect(returnArrayOfOnlyEvenNumbers(arr)).toEqual([-2, 0, 2]);
});

// Test 4: Filtering an array with zeros
test('filters an array with zeros to include only even numbers', () => {
  const arr = [0, 1, 2, 3];
  expect(returnArrayOfOnlyEvenNumbers(arr)).toEqual([0, 2]);
});

// Test 5: Filtering an empty array
test('returns an empty array when filtering an empty array', () => {
  const arr = [];
  expect(returnArrayOfOnlyEvenNumbers(arr)).toEqual([]);
});

// Test 6: Filtering an array with one even element
test('filters an array with one even element to include only that element', () => {
  const arr = [2];
  expect(returnArrayOfOnlyEvenNumbers(arr)).toEqual([2]);
});

// Test 7: Filtering an array with one odd element
test('filters an array with one odd element to return an empty array', () => {
  const arr = [1];
  expect(returnArrayOfOnlyEvenNumbers(arr)).toEqual([]);
});

// Test 1: Summing an array of positive numbers
test('sums an array of positive numbers', () => {
  const arr = [1, 2, 3, 4, 5];
  expect(returnSumOfAllNumbersInArray(arr)).toBe(15);
});

// Test 2: Summing an array of negative numbers
test('sums an array of negative numbers', () => {
  const arr = [-1, -2, -3, -4];
  expect(returnSumOfAllNumbersInArray(arr)).toBe(-10);
});

// Test 3: Summing an array with both positive and negative numbers
test('sums an array with both positive and negative numbers', () => {
  const arr = [-2, -1, 0, 1, 2];
  expect(returnSumOfAllNumbersInArray(arr)).toBe(0);
});

// Test 4: Summing an array with zeros
test('sums an array with zeros', () => {
  const arr = [0, 0, 0];
  expect(returnSumOfAllNumbersInArray(arr)).toBe(0);
});

// Test 5: Summing an empty array
test('returns 0 when summing an empty array', () => {
  const arr = [];
  expect(returnSumOfAllNumbersInArray(arr)).toBe(0);
});

// Test 6: Summing an array with one element
test('sums an array with one element', () => {
  const arr = [5];
  expect(returnSumOfAllNumbersInArray(arr)).toBe(5);
});
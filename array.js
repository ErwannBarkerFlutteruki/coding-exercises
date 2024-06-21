// Fill in the body of the functions following the instructions.
// Important! Don't change the name of the functions.

// Update the function to add 'element' to the start of 'arr'
export const pushElementOnToArray = (arr, x) => {
	arr.unshift(x);
	return arr;
};

// Update the function to remove the last element from 'arr'
export const removeLastElementFromArray = (arr) => {
	return arr.pop();
};

// Update the function to remove the first element from 'arr'
export const removeFirstElementFromArray = (arr) => {
	return arr.shift();
};

// Update function to return combined arrays
export const mergeTwoArraysTogether = (arr1, arr2) => {
	let newArr = arr1.concat(arr2);
	return newArr;
};

// Update function to return length of array
export const getArrayLength = (arr) => {
	return arr.length;
};

// Update function to get the first index of a particular string
export const getIndexOfStringInArray = (arr, str) => {
	return arr.indexOf(str);
};

// Update function to sort arrays from high to low
export const sortArrayOfNumbersFromHighToLow = (arr) => {
	let sorted = arr.sort()
	let revArr = sorted.reverse();
	return revArr;
};

// Update function to return array of numbers each doubled
export const returnArrayOfNumbersDoubled = (arr) => {
	let doubledNum = arr.map((x) => x * 2)
	return doubledNum;


};

// Update function to return array of even numbers
export const returnArrayOfOnlyEvenNumbers = (arr) => {

	let evenNum = arr.filter((x) => x % 2 === 0)
	return evenNum;
};

// Update function to return the total of all numbers in array added together
export const returnSumOfAllNumbersInArray = (arr) => {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i]
	} return sum;
};

// Update function to find the first match
export const returnTheFirstStringThatMatches = (arr, target) => {
	const found = arr.find((element) => element === target);
	return found;
};

// Update function to return the index of the first match
export const returnFirstIndexOfString = (arr, target) => {
	const found = arr.findIndex((element) => element === target);
	return found;
};

// Update function to check that every number is negative
export const returnsEveryNumberIsNegative = (arr) => {
	const neg = arr.every((element) => element < 0);
	return neg;
};

// Update function to check that at least 1 element is negative
export const returnsAtLeastOneNumberIsNegative = (arr) => {
	const neg = arr.some((element) => element < 0);
	return neg;
};

// Update function to check that array has a particular number/string/whatever
export const returnsArrayHasElement = (arr, target) => {
	const found = arr.includes(target);
	return found;
};

// Update function to return a single string with attaching strings between
export const returnsASingleStringWithExtraLettersBetweenEachElement = (arr, extraLetters) => {
	return arr.join(extraLetters);
};

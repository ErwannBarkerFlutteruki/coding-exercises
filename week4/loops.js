
/**
 * using do while write a countdown function that takes a number, and returns an array starting from that number to 0
 * for example if start = 5, return would be [5,4,3,2,1,0]
 * If anything below 0 is passed an empty array is returned.
 * You must use a DO-WHILE loop
 */
export function countdown(start) {
	let returnArr = [];
	if (start < 0) {
		return [];
	}
	do {
		returnArr.push(start); // [5]
		start --
	} while (start >= 0)
	return returnArr;
}

// write a function that finds the first even number in an array and returns it
// you must use a DO-WHILE loop
export function findFirstEven(arr) {
	let firstEvenNum = null;
	let i = 0;
	const filterOutEvens = (num) => num % 2 === 0;

	do {
		if (filterOutEvens(arr[i])) {
			firstEvenNum = arr[i]
		}
		i++
	} while (i < arr.length && !filterOutEvens(firstEvenNum))
	return firstEvenNum;
}

// write a function that takes an array and sums up all the numbers
// you must use a WHILE loop
export function sumArrayElements(arr) {
	let i = 0;
	let sum = 0;
	while (i < arr.length) {
		sum += arr[i];
		i++
	}
	return sum;
}

//write a function that uses a for loop to reverse a string
// you must use a FOR loop
export function reverseString(str) {
	let revStr = "";
	for (let i = str.length - 1; i >= 0; i--) {
		revStr += str[i]
	}
	return revStr;
}

// filter out odd numbers, given an array of numbers only return the even ones
// you must use a FOR loop
export function filterEvenNumbers(arr) {
	let evenNum = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			evenNum.push(arr[i])
		}
	}
	return evenNum;

}


// return an array containing each objects property
// example: obj= {name: 'bob', age: 70}. return = ['bob', 70]
// you must use a FOR loop

// const object = { a: 1, b: 2, c: 3 };

// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }

export function printObjectProperties(obj) {
	let result = [];
	for (const property in obj) {
		result.push(obj[property]);
	}
	return result;
}


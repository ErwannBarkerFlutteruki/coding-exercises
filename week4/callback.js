// For these tests you will be using callbacks with Array prototypes.

// write a function to filter out odd numbers so you only have even ones left
// use a callback in this function
export function findAllEvens(arr) {
	const filterOutEvens = (num) => num % 2 === 0;
	return arr.filter(filterOutEvens);

}


// write a function that takes an array and sums up all the numbers
// you must use a callback
// const initialValue = 0;
//const sumWithInitial = array1.reduce(
//  (accumulator, currentValue) => accumulator + currentValue,
//  initialValue,
//);

export function sumArrayElements(arr) {
	
	const sumofNums = (a, b) => a + b;
	return arr.reduce(sumofNums, 0)
}

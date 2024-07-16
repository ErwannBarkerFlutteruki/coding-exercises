// create an exported arrow function that adds two inputs together and returns them, do not use the return keyword
// call this arrow function 'add'
export const add = (a, b) => a + b;



// create an exported arrow function that checks if an input is a number, if so double it and return it, if not return false
// call this arrow function 'doubleIfNumber'
export const doubleIfNumber = (num) => {
	if (typeof num == "number") {
		return num * 2;
	}
	return false
}
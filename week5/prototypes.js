//Strings

// return the 3rd character of a string
export const thirdChar = (str) => {
	return str.charAt(2);

}

//merge two words
export const mergeWords = (str1, str2) => {
	return str1.concat(str2);
}

//check that a string contains another string
export const stringContains = (str, search) => {
	return str.includes(search);
}

//return the string size
export const stringSize = (str) => {
	return str.length;
}

//convert a string to an array using a delimter to chose what to split it up by
export const convertStringToArray = (str, delimiter) => {
	return str.split(delimiter);
}

//Arrays

//return the array size
export const arraySize = (arr) => {
	return arr.length;
}

// add an element to an array
export const addToArray = (arr, elem) => {
	arr.push(elem);
	return arr;
}

//remove the last element from array and return that value
export const removeLastElementFromArray = (arr) => {
	return arr.pop();

}

// modify each element in a array with a passed callback
export const modifyElementsInArray = (arr, callback) => {
	return arr.map(callback);
}

//Objects

// returna boolean if an object has a proptery
export const hasOwnProp = (obj, prop) => {
	return obj.hasOwnProperty(prop);
}

// return the keys of an object
export const getKeys = (obj) => {
	return Object.keys(obj);
}

// return the values of an object
export const getValues = (obj) => {
	return Object.values(obj);

}

// Fill in the body of the functions following the instructions.
// Important! Don't change the name of the functions.

function getYearOfBirth(user) {
  // return the user's yearOfBirth
  // you can assume that the passed user will always have a 'yearOfBirth' property
	return user.yearOfBirth;
}

function isOver40(user) {
  /*
    This function takes a user object with a property of age. It should return true if the user is over 40 and false if the user is 40 or younger.
    */
	 if (user.age > 40) {
		return true
	 } else return false
}

function createProduct() {
  /* This function should return an object with a type property and a price property. The value for type can be any string, and the value for price should be a number.
   */
	let myObj = {type: String(), price: Number()}
	return myObj;
}

function addPriceToProduct(product, price) {
  /* The argument product will be an object that looks like this:
    { type: 'Tofu slices' }
    Add a price property to this object and set its value to the price passed in as an argument. Then return the object.
    */
		product.price = price;
		return product;
}

function createCoder(name, yearOfBirth) {
  // return an object with:
  // a name property set to the value of the name parameter
  // an age property set to whatever the age of the coder would be on the year 2017
  // a language property set to 'JavaScript'
	let myObj = {
		name: name, 
		age: 2017 - yearOfBirth,
		language: "JavaScript",
	} 
	return myObj;
}

function getAlbumProperties(obj) {
  // should take an object with information about an album
  // should return an array containing all of the object's keys
  // Tip - you could use a loop, or can you find a handy method to use instead?
  // E.g. {a: 'foo', b: 'car', c: 'bar'} should return ['a', 'b', 'c']
	return Object.keys(obj);

}

function getAlbumValues(obj) {
  // should take an object with information about an album
  // should return an array containing all of the object's values
  // E.g. {a: 'foo', b: 'car', c: 'bar'} should return ['foo', 'car', 'bar']
	return Object.values(obj);

}

function countKeys(obj) {
  /*
    This function will take an object and should return a count of how many keys it has.
    E.g. {a: 'foo', b: 'bar', c: 'cat'} returns 3
    */
		return Object.keys(obj).length;

}

function addBandName(array) {
  // should take an array of album objects
  // should add a "bandName" property to each object in the array set to a value of 'Radiohead';
	const newArr = array.map((object) => {
		object.bandName = "Radiohead"	
		return object;
	})
	return newArr;
}

function deletePassword(user) {
  /*
    This function takes a user object such as:
    {name: 'Barry', username: 'bazzaa44', password: 'ilovetea'}
  
    It should delete the password key value pair and return the user object.
    */

		delete user.password;
		return user;
}

function countTheObjects(arr) {
  /*
    This function takes an array of different data types. It should return a count of the number of objects in the array.
  
    NB, think carefully about how to test if something is an object! Arrays are technically types of objects in JavaScript, as is the value null. However these should not be counted.
    */
	 let count = 0;
	 for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] === "object" && Array.isArray(arr[i]) === false && arr[i] !== null) {
			count ++
		} 
	 } return count
}

module.exports = {
  createProduct,
  isOver40,
  getYearOfBirth,
  addPriceToProduct,
  createCoder,
  getAlbumProperties,
  getAlbumValues,
  countKeys,
  addBandName,
  deletePassword,
  countTheObjects,
};

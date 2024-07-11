// Fill in the body of the functions following the instructions.
// Important! Don't change the name of the functions.

export function getEvenNums(nums) {
  /*
    This function takes an array of integers and returns an array containing only even integers
    */
	 let evenNums = nums.filter(num => num % 2 === 0)
	 return evenNums;
}

export function getWordLengths(str) {
  /*
    This function takes a string and returns an array of the lengths of each word in the string.
    E.g. 'pineapple and black bean curry' => [9, 3, 5, 4, 5]
    */
	 if (str.length === 0 ) {
		return []
	 }
	 let words = str.split(" ");
	 let wordsLength = words.map(word => word.length)
	 return wordsLength;
}

export function getMiddleNames(names) {
  /*
    This function receives an array of names and returns an array containing the middle names. 
    If someone does not have a middle name the array should contain the value null at this index.
    E.g. ['Ben Jones', 'Marsha Naomi Jenkins', 'Anna'] => [null, 'Naomi', null]
    */
	 return names.map(
		name => {
			let nameAsArray = name.split(" ")
			if (nameAsArray.length === 3) {
				return nameAsArray[1]
			} 
			return null;
		}
	 ) 
}

export function getPugNames(dogs) {
  /*
    This function takes an array of dog objects and returns an array of the names of all the pugs.
    E.g. [
      {name: 'Beatrice', breed: 'Lurcher'},
      {name: 'Max', breed: 'Pug'},
      {name: 'Poppy', breed: 'Pug'}
    ]
    will return ['Max', 'Poppy']
    */
	 let pugsOnly = dogs.filter(dog => dog.breed === "Pug");
	 return pugsOnly.map(pug => pug.name);
}

export function createUser() {
  // Create an object with properties name set to "Joan" and age set to 70. Then return the object.
	const newObj = {
		name: "Joan",
		age: 70
	}
	return newObj;
}

export function modifyBook(bookObject, genre) {
  /*
  bookObject is an object that looks like this: 
  { title: 'Alice`s Adventures in Wonderland', author: 'Lewis Carroll' },
  Add a 'genre' property to this object and set its value to the genre argument passed in to this function. Then return the object.
  */
 bookObject.genre = genre;
 return bookObject;
}

export function copyProduct(product) {
  /* product is an object. Return a shallow copy of product
  N.B You should NOT look at the unit test object and just re-write it */
	return {...product};
}

export function checkGardenForSunflowers(garden) {
  /* garden is an object with some or all of the following properties:
  {
    roses: 'white',
    tulips: 'red',
    dahlias: 'pink,
    sunflowers: 'yellow'
  }
  Return true if the garden has a 'sunflowers' property, otherwise return false.

  N.B see if there are any Object methods that might help you on MDN
  */

	// Solution 1:
//  if (garden.sunflowers) {
// 	return true
//  } 
//  return false

// Solution 2
	const flowerTypes = Object.keys(garden);
	// ["roses", "tulips", "dahlias", "sunflowers"]
	return flowerTypes.includes("sunflowers");
}

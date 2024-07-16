// Fill in the body of the functions following the instructions.
// Important! Don't change the name of the functions.


export function getMiddleNames(names) {
  /*
    This function receives an array of names and returns an array containing the middle names.
    If someone does not have a middle name the array should contain the value null at this index.
    E.g. ['Ben Jones', 'Marsha Naomi Jenkins', 'Anna'] => [null, 'Naomi', null]
    */
	 return names.map(name => {
		 let indNames = name.split(" ")
		 if (indNames.length === 3) {
			return indNames[1];
		 } 
		 return null;
	 })
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
	 let pugs = dogs.filter(dog => dog.breed === "Pug");
	 return pugs.map(pug => pug.name);
}

// create a global variable (to this file) names 'message', return this variable in the below function
const message = "Hello";

export function returnGlobalMessage() {
	return message;
}

// return a message, using a new const variable called 'message'. the Message should equal 'Bye', this should also not break previous tests.
export function returnLocalMessage() {
	const message = "Bye";
	return message;
}

//return a passed variable which has to be called 'message' so that what ever is passed to this funciton is returned.
export function returnPassedMessage(message) {
	return message;
}

//fix this function and explain why it isn't working
export function fixIfMessageReturn() {
      let message = 'Hey'
			message += ', Block!';

    return message;
}

//fix this function and explain why it isn't working
export function doubleFilterEvensThenEachNumber(arr) {
	let multipliyer = 2;
    const evens = arr.filter((x) => {
        return x % 2 === 0;
    });
    return evens.map((x) => x * multipliyer);
}


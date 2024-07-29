// create a global variable (to this file) named 'message' give it a value of 'Hello', return this variable in the below function
export function returnGlobalMessage() {
}

// return a message, using a new const variable called 'message'. the Message should equal 'Bye', this should also not break previous tests.
export function returnLocalMessage() {
}

//return a passed variable which has to be called 'message' so that what ever is passed to this funciton is returned.
export function returnPassedMessage() {
}

//fix this function and explain why it isn't working
export function fixIfMessageReturn() {
    if (true) {
        let message = 'Hey'
    }
    message += ', Block!';

    return message;
}

//fix this function and explain why it isn't working
export function doubleFilterEvensThenEachNumber(arr) {
    const evens = arr.filter((x) => {
        const multipliyer = 2;
        return x % 2 === 0;
    });

    return evens.map((x) => x * multipliyer);
}


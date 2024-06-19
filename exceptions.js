
// update the code so that an error is caught, and true is returned when its caught
export const catchTheErrorAndReturnTrue = () => {
	try {
    nonExistentFunction();
	} catch {
    return true;
	} 
	return false;
	}
	
// throw an error with the message "something went wrong"
export const throwANewErrorWithMessage = () => {
	try {
		throw new Error("something went wrong")
	} catch (err) {
		throw err;
	}
}

// throw a TypeError
export const throwANewTypeError = () => {
	try {
		throw new TypeError("error")
	} catch (err) {
		throw err;
	}
}


// update the function to return x if it's a booleanm if if it's return a type error with message "variable not a boolean"
export const ifXisNotaBooleanThrowErrorOtherwiseReturnBoolean = (x) => {
	if (typeof x !== "boolean") {
		try {
			throw new TypeError("variable not a boolean")
		} catch (err) {
			throw err;
		}
	} return x;
}

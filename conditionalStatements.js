
// update the function to return true if x equal y regardless of type
export const ifXEqualsYRegardlessOfType =  (x, y) => {
	return x == y;
}

// update the function to return true if x equal y only if they are of the same type
export const ifXEqualsYWithTypeCheck = (x, y) => {
	return x === y;
}

// update the function to return true if x is greater than y
export const ifXisGreaterThanY = (x, y) => {
	return x > y;
}

// update the function to return true if x is smaller than y
export const ifXisSmallerThanY = (x, y) => {
	return x < y;
}

// update the function to return true if x is greater or equal to y
export const ifXisGreaterOrEqualToY = (x, y) => {
	return x >= y;
}

// update the function to return true if x is smaller or equal to y
export const ifXisSmallerOrEqualToY = (x, y) => {
	return x <= y;
}

// update the function to return true if x equals y or x equals z and they are of the same type
export const ifXIsEqualToYOrZWithTypeCheck = (x, y, z) => {
	return x === y || x === z;
}

// update the function to return true if x equals y and x equals z and they are of the same type
export const ifXIsEqualToYAndZWithTypeCheck = (x, y, z) => {
	return x === y && x === z;
}

// update the function to return y, multiply Y by 7 if X is true.
export const ifXisTrueMultiplyYBy7AndAlwaysReturnY = (x, y) => {
	if (x === true) {
		return y * 7;
	}
	return y;
}
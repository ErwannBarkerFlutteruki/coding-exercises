// Do this exercise after ConditionalStatmeents and Operators.
// in this file the task is to fix the broken code, try and figure out what should happen from the function name and the tests

export const ifXEqualsYRegardlessOfType = (x, y) => {
    return x == y;
}

export const ifXEqualsYWithTypeCheck = (x, y) => {
    return x === y;
}

export const ifXisGreaterThanY = (x, y) => {
    return x > y;
}

export const ifXisSmallerThanY = (x, y) => {
    return x < y;
}

export const ifXisGreaterOrEqualToY = (x, y) => {
    return x >= y;
}

export const ifXisSmallerOrEqualToY = (x, y) => {
    return x <= y;
}

export const ifXIsEqualToYOrZWithTypeCheck = (x, y, z) => {
    return (x === y) || (x === z);
}

export const ifXIsEqualToYAndZWithTypeCheck = (x, y, z) => {
    return (x === y) && (x === z);
}


export const ifXisTrueDevideYBy7AndAlwaysReturnY = (x, y) => {
    if (x === true) {
        return y * 7;
    }
    return y;
}
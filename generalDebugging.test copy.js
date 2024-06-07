import * as myFunctions from './generalDebugging';

describe('task1', () => {
    test('ifXEqualsYRegardlessOfType', () => {
        expect(myFunctions.ifXEqualsYRegardlessOfType(1, 1)).toBeTruthy();
        expect(myFunctions.ifXEqualsYRegardlessOfType(true, true)).toBeTruthy();
        expect(myFunctions.ifXEqualsYRegardlessOfType(true, false)).toBeFalsy();
        expect(myFunctions.ifXEqualsYRegardlessOfType(1, 2)).toBeFalsy();
        expect(myFunctions.ifXEqualsYRegardlessOfType(0, null)).toBeFalsy();
        expect(myFunctions.ifXEqualsYRegardlessOfType(0, "0")).toBeTruthy();
        expect(myFunctions.ifXEqualsYRegardlessOfType(55, "55")).toBeTruthy();
        expect(myFunctions.ifXEqualsYRegardlessOfType(false, 0)).toBeTruthy();
    });
    test('ifXEqualsYWithTypeCheck', () => {
        expect(myFunctions.ifXEqualsYWithTypeCheck(1, 1)).toBeTruthy();
        expect(myFunctions.ifXEqualsYWithTypeCheck(true, true)).toBeTruthy();
        expect(myFunctions.ifXEqualsYWithTypeCheck(true, false)).toBeFalsy();
        expect(myFunctions.ifXEqualsYWithTypeCheck(1, 2)).toBeFalsy();
        expect(myFunctions.ifXEqualsYWithTypeCheck(1, 2)).toBeFalsy();
        expect(myFunctions.ifXEqualsYWithTypeCheck(0, null)).toBeFalsy();
        expect(myFunctions.ifXEqualsYWithTypeCheck(0, "0")).toBeFalsy();
        expect(myFunctions.ifXEqualsYWithTypeCheck(55, "55")).toBeFalsy();
        expect(myFunctions.ifXEqualsYWithTypeCheck(false, 0)).toBeFalsy();
    });

    test('ifXisGreaterThanY', () => {
        expect(myFunctions.ifXisGreaterThanY(1, 0)).toBeTruthy();
        expect(myFunctions.ifXisGreaterThanY(1, -1)).toBeTruthy();
        expect(myFunctions.ifXisGreaterThanY(9999, 0)).toBeTruthy();
        expect(myFunctions.ifXisGreaterThanY(1, 2)).toBeFalsy();
        expect(myFunctions.ifXisGreaterThanY(-1, 0)).toBeFalsy();
        expect(myFunctions.ifXisGreaterThanY(0, 0)).toBeFalsy();
        expect(myFunctions.ifXisGreaterThanY(1, 1)).toBeFalsy();
    });
    test('ifXisSmallerThanY', () => {
        expect(myFunctions.ifXisSmallerThanY(1, 0)).toBeFalsy();
        expect(myFunctions.ifXisSmallerThanY(1, -1)).toBeFalsy();
        expect(myFunctions.ifXisSmallerThanY(9999, 0)).toBeFalsy();
        expect(myFunctions.ifXisSmallerThanY(1, 2)).toBeTruthy();
        expect(myFunctions.ifXisSmallerThanY(-1, 0)).toBeTruthy();
        expect(myFunctions.ifXisSmallerThanY(0, 0)).toBeFalsy();
        expect(myFunctions.ifXisSmallerThanY(1, 1)).toBeFalsy();

    });
    test('ifXisGreaterOrEqualToY', () => {

        expect(myFunctions.ifXisGreaterOrEqualToY(1, 0)).toBeTruthy();
        expect(myFunctions.ifXisGreaterOrEqualToY(1, -1)).toBeTruthy();
        expect(myFunctions.ifXisGreaterOrEqualToY(9999, 0)).toBeTruthy();
        expect(myFunctions.ifXisGreaterOrEqualToY(1, 2)).toBeFalsy();
        expect(myFunctions.ifXisGreaterOrEqualToY(-1, 0)).toBeFalsy();
        expect(myFunctions.ifXisGreaterOrEqualToY(0, 0)).toBeTruthy();
        expect(myFunctions.ifXisGreaterOrEqualToY(1, 1)).toBeTruthy();
    });
    test('ifXisSmallerOrEqualToY', () => {
        expect(myFunctions.ifXisSmallerOrEqualToY(1, 0)).toBeFalsy();
        expect(myFunctions.ifXisSmallerOrEqualToY(1, -1)).toBeFalsy();
        expect(myFunctions.ifXisSmallerOrEqualToY(9999, 0)).toBeFalsy();
        expect(myFunctions.ifXisSmallerOrEqualToY(1, 2)).toBeTruthy();
        expect(myFunctions.ifXisSmallerOrEqualToY(-1, 0)).toBeTruthy();
        expect(myFunctions.ifXisSmallerOrEqualToY(0, 0)).toBeTruthy();
        expect(myFunctions.ifXisSmallerOrEqualToY(1, 1)).toBeTruthy();
    });
    test('ifXIsEqualToYOrZWithTypeCheck', () => {
        expect(myFunctions.ifXIsEqualToYOrZWithTypeCheck(1, 1, 5)).toBeTruthy();
        expect(myFunctions.ifXIsEqualToYOrZWithTypeCheck(1, "1", 1)).toBeTruthy();
        expect(myFunctions.ifXIsEqualToYOrZWithTypeCheck(1, "1", "1")).toBeFalsy();
        expect(myFunctions.ifXIsEqualToYOrZWithTypeCheck(1, 4, 1)).toBeTruthy();
        expect(myFunctions.ifXIsEqualToYOrZWithTypeCheck(1, -1, 2)).toBeFalsy();
    });
    test('ifXIsEqualToYAndZWithTypeCheck', () => {
        expect(myFunctions.ifXIsEqualToYAndZWithTypeCheck(1, 1, 1)).toBeTruthy();
        expect(myFunctions.ifXIsEqualToYAndZWithTypeCheck(1, "1", 1)).toBeFalsy();
        expect(myFunctions.ifXIsEqualToYAndZWithTypeCheck(1, -1, 2)).toBeFalsy();
        expect(myFunctions.ifXIsEqualToYAndZWithTypeCheck(1, 1, 2)).toBeFalsy();
        expect(myFunctions.ifXIsEqualToYAndZWithTypeCheck(1, 2, 1)).toBeFalsy();
    });
    test('ifXisTrueDevideYBy7AndAlwaysReturnY', () => {
        expect(myFunctions.ifXisTrueDevideYBy7AndAlwaysReturnY(true, 1)).toBe(7);
        expect(myFunctions.ifXisTrueDevideYBy7AndAlwaysReturnY(true, -1)).toBe(-7);
        expect(myFunctions.ifXisTrueDevideYBy7AndAlwaysReturnY(true, 55)).toBe(385);
        expect(myFunctions.ifXisTrueDevideYBy7AndAlwaysReturnY(1, 5)).toBe(5);
        expect(myFunctions.ifXisTrueDevideYBy7AndAlwaysReturnY(false, 5)).toBe(5);
        expect(myFunctions.ifXisTrueDevideYBy7AndAlwaysReturnY("true", 5)).toBe(5);
    });
});
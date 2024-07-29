import * as myFunctions from './operators';

describe('task1', () => {
    test('add', () => {
        expect(myFunctions.add(1, 2)).toBe(3);
        expect(myFunctions.add(6, 3)).toBe(9);
        expect(myFunctions.add(-6, 7)).toBe(1);
        expect(myFunctions.add(6, -7)).toBe(-1);
    });
    test('subtract', () => {
        expect(myFunctions.subtract(1, 2)).toBe(-1);
        expect(myFunctions.subtract(6, 3)).toBe(3);
        expect(myFunctions.subtract(-6, 7)).toBe(-13);
        expect(myFunctions.subtract(6, -7)).toBe(13);
    });
    test('divide', () => {
        expect(myFunctions.divide(1, 2)).toBe(0.5);
        expect(myFunctions.divide(6, 3)).toBe(2);
        expect(myFunctions.divide(-6, 7)).toBe(-0.8571428571428571);
        expect(myFunctions.divide(6, -7)).toBe(-0.8571428571428571);
    });
    test('multiply', () => {
        expect(myFunctions.multiply(1, 2)).toBe(2);
        expect(myFunctions.multiply(6, 3)).toBe(18);
        expect(myFunctions.multiply(-6, 7)).toBe(-42);
        expect(myFunctions.multiply(-6, -7)).toBe(42);
    });
    test('multiplyAndAdd', () => {
        expect(myFunctions.multiplyAndAdd(1, 2, 3)).toBe(5);
        expect(myFunctions.multiplyAndAdd(6, 3, 0)).toBe(18);
        expect(myFunctions.multiplyAndAdd(-6, 7, 1)).toBe(-48);
        expect(myFunctions.multiplyAndAdd(-6, -7, 3)).toBe(24);
    });
    test('increaseXbyYNNumberOftimes', () => {
        expect(myFunctions.increaseXbyYNNumberOftimes(1, 2, 5)).toBe(11);
        expect(myFunctions.increaseXbyYNNumberOftimes(5, -1, 5)).toBe(0);
        expect(myFunctions.increaseXbyYNNumberOftimes(115, 99991, 110002)).toBe(10999210097);
    })
    test('flipPostiveToNegativeAndViseVersa', () => {
        expect(myFunctions.flipPostiveToNegativeAndViseVersa(33)).toBe(-33);
        expect(myFunctions.flipPostiveToNegativeAndViseVersa(-33)).toBe(33);
    })
    test('mirror', () => {
        expect(myFunctions.mirror(33)).toBe(33);
        expect(myFunctions.mirror(-22)).toBe(-22);
    })
});
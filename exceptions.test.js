import * as myFunctions from './exceptions';

describe('task1', () => {
    test('catchTheErrorAndReturnTrue', () => {
        expect(myFunctions.catchTheErrorAndReturnTrue()).toBeTruthy();
    });
    test('catchTheErrorAndReturnTrue', () => {
        expect(myFunctions.throwANewErrorWithMessage).toThrow(Error);
        expect(myFunctions.throwANewErrorWithMessage).toThrow("something went wrong");
    });
    test('catchTheErrorAndReturnTrue', () => {
        expect(myFunctions.throwANewTypeError).toThrow(TypeError);
    });

    test('ifXisNotaBooleanThrowErrorOtherwiseReturnBoolean', () => {
        expect(myFunctions.ifXisNotaBooleanThrowErrorOtherwiseReturnBoolean).toThrow(TypeError);
        try {
            myFunctions.ifXisNotaBooleanThrowErrorOtherwiseReturnBoolean(1);
        } catch (e) {
            expect(e.message).toBe("variable not a boolean");
        }
        try {
            myFunctions.ifXisNotaBooleanThrowErrorOtherwiseReturnBoolean("1");
        } catch (e) {
            expect(e.message).toBe("variable not a boolean");
        }
        try {
            myFunctions.ifXisNotaBooleanThrowErrorOtherwiseReturnBoolean(1.4);
        } catch (e) {
            expect(e.message).toBe("variable not a boolean");
        }
        expect(myFunctions.ifXisNotaBooleanThrowErrorOtherwiseReturnBoolean(true)).toBeTruthy();
        expect(myFunctions.ifXisNotaBooleanThrowErrorOtherwiseReturnBoolean(false)).toBeFalsy();
    });

});
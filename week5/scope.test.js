import {
  returnGlobalMessage,
  returnLocalMessage,
  returnPassedMessage,
  fixIfMessageReturn,
  doubleFilterEvensThenEachNumber,
} from "./scope";


describe("messages", function () {
  it("returns global message", () => {
    expect(returnGlobalMessage()).toEqual('Hello');
  });

  it("returns local message", () => {
    expect(returnLocalMessage()).toEqual('Bye');
  });

  it("returns passed message", () => {
    expect(returnPassedMessage('Yo')).toEqual('Yo');
  });

  it("fix the function to return a message", () => {
    expect(fixIfMessageReturn()).toEqual('Hey, Block!');
  });
  it('doubleFilterEvensThenEachNumber', () => {
    expect(doubleFilterEvensThenEachNumber([1,2,3,4])).toEqual([4,8]);
  })
});




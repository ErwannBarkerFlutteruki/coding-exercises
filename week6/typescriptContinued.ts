// typehint the following variables

const isRight = false;
const firstName = 'Bob';
const age = 24;
const dateTime = new Date();
const numberList = [1,2,4,5,6];
const nameList = ['bob', 'smith', 'a name', 'something else'];
const listOfNumberList = [[1,3,4], [4], [2,4,5]];
const listOfObjects = [{}, {}, {}]

// create a type that satisfy the following object
// anything that's an array should have it's own type defined
// add the new type to the const
const user = {
    username: "bobsmith22",
    name:  "boby",
    age: 66,
    addresses: [
        {
            firstline: "2 wellington place",
            postcode: "ls1 4ap",
            town: "leeds",
            region: "west yorkshire",
            population: 234543324,
            type: "WORK",
            isPrimary: true
        },
        {
            firstline: "4 wellington place",
            postcode: "ls1 4ap",
            town: "leeds",
            population: 234543324,
            type: "HOME",
            isPrimary: false
        }
    ],
    isEmployed: false
}

//create an interface for the following function and add it to the function so it's typed for all inputs, and the return
const myFuns = (str, user) => user;

myFuns('foo', user);

//stops typescript error for files with same constants
export default null;
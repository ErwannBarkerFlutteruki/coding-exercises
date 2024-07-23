// typehint the following variables

const isRight: boolean = false;
const firstName: string = 'Bob';
const age: number = 24;
const dateTime: Date = new Date();
const numberList: number[] = [1,2,4,5,6];
const nameList: string[] = ['bob', 'smith', 'a name', 'something else'];
const listOfNumberList: number[][] = [[1,3,4], [4], [2,4,5]];
const listOfObjects: {}[] = [{}, {}, {}]

// create a type that satisfy the following object
// anything that's an array should have it's own type defined
// add the new type to the const below

type User = {
	username: string;
	name: string;
	age: number;
	addresses: Addresses
	isEmployed: boolean
}

type Addresses = Address[]

type Address = {
	firstline: string;
	postcode: string;
	town: string;
	region?: string;
	population: number;
	type: string;
	isPrimary: boolean;
}


const user: User = {
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

// interface IFormatter {
// 	(data: string, toUpper: boolean): string;
// };
interface MyFuns {
	(str: string, user: User): User;
}

const myFuns: MyFuns = (str, user) => user;

myFuns("foo", user);
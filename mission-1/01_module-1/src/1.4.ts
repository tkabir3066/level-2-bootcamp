//basic data types

//string

let firstName: string = "John";

//number
let age: number = 30;

//boolean
let isAdmin: boolean = true;

//undefined
let x: undefined = undefined;
//null
let y: null = null;

//array

let friends: string[] = ["John", "Jane", "Doe"];
let eligibleRollList: number[] = [1, 3, 4];

//tuple --> array --> order --> type of values

let coordinates: [number, number] = [1, 5]; // [x, y]

let ageName: [number, string, boolean] = [30, "John", true]; // [age, name, isAdmin]

/* 

In JavaScript, arrays consist of values of the same type, but sometimes we need to store a collection of values of different types in a single variable. TypeScript offers tuples for this purpose. Tuples are similar to structures in C programming and can be passed as parameters in function calls.

Tuples can contain one or more types of data (e.g., numbers and strings).
*/

// basic data types
//ss bb u nn --> string,symbol, boolean,bigInt, undefined, number,null (Primitive data types)
// non primitive data types --> object, function, array

const str: string = "hello world";
// let myVar = 1; //typescript will infer the type of myVar as number by default
let myVar: number = 1;

let numbers: (number | string)[] = [1, 3, 4, "str"];

export type TObj = {
  name: string;
  age: number;
  education?: {
    institution: string;
    degree: string;
  };
};

export const obj = {
  name: "John",
  age: 30,
  education: {
    institution: "University",
    degree: "Bachelors",
  },
};

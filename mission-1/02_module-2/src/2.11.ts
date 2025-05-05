{
  // ----------------------------Start----------------------------//
  //utility types
  //utility types are used to create new types from existing types
  //pick type

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  // type Name = Pick<Person, "name">;
  // type Age = Pick<Person, "age">;

  type NameAge = Pick<Person, "name" | "age">; // type NameAge = { name: string; age: number; }>

  //omit type (baad dewa)

  type ContactInfo = Omit<Person, "name" | "age">;

  //required utility

  type RequiredPerson = Required<Person>;

  //partial utility (property guloke optional kore debe)
  type PersonPartial = Partial<Person>;
  /* 
  type PersonPartial = {
    name?: string | undefined;
    age?: number | undefined;
    email?: string | undefined;
    contactNo?: string | undefined;
}
  
  */

  //readonly utility
  type PersonReadonly = Readonly<Person>;
  /* 
  type PersonReadonly = {
    readonly name: string;
    readonly age: number;
    readonly email?: string | undefined;
    readonly contactNo: string;
}
  
  */

  const person1: PersonReadonly = {
    name: "John",
    age: 25,
    contactNo: "0123456789",
  };

  person1.name = "Jane"; //error

  //record utility

  // type myObj = {
  //   a: string;
  //   b: string;
  // };

  // type MyObj = Record<string, string>;

  // const obj1: MyObj = {
  //   a: "a",
  //   b: "b",
  //   c: "c",
  //   d: 4,
  // };

  type MyObj = Record<string, unknown>;

  const emptyObj: MyObj = {};
  emptyObj.name = "Tk";
  emptyObj.age = 29;
  // ----------------------------End----------------------------//
}

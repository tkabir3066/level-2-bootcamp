{
  //------------------Start------------------//
  //Generic types
  //Generic types are a powerful feature of TypeScript that allow you to create reusable components that can work with any data type.

  /*   type GenericArrayNumber = Array<number>;
  type GenericArrayString = Array<string>;
  type GenericArrayBoolean = Array<boolean>; */
  type GenericArray<T> = Array<T>;

  //   const rollNumbers: number[] = [3, 5, 8];
  //   const rollNumbers: Array<number> = [3, 5, 8];
  const rollNumbers: GenericArray<number> = [3, 5, 8];

  //   const mentors: string[] = ["John", "Jane", "Jim"];
  //   const mentors: Array<string> = ["John", "Jane", "Jim"];
  const mentors: GenericArray<string> = ["John", "Jane", "Jim"];

  //   const boolArray: boolean[] = [true, false, true];
  //   const boolArray: Array<boolean> = [true, false, true];
  const boolArray: GenericArray<boolean> = [true, false, true];

  //array of objects

  const users: GenericArray<{ name: string; age: number }> = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
  ];

  //Tuple using generic types
  //generic tuple

  type GenericTuple<X, Y> = [X, Y];

  const manush: GenericTuple<string, string> = ["Mr. X", "Mrs. Y"];

  const userWithId: GenericTuple<number, { name: string; email: string }> = [
    123,
    { name: "John", email: "abc@gmail.com" },
  ];
  //------------------End------------------//
}

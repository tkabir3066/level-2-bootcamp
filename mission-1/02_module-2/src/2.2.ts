{
  // -------------------- START OF THE FILE -------------------- //
  //====== Interface ======//

  //using type alias
  type User1 = {
    name: string;
    age: number;
  };

  const user1: User1 = {
    name: "John",
    age: 30,
  };

  //using interface
  interface User2 {
    name: string;
    age: number;
  }

  const user2: User2 = {
    name: "Jane",
    age: 25,
  };

  //type alias vs interface
  //type alias can be used for primitives, unions, and tuples
  //interface can be used for objects and can be extended

  type UserWithRole1 = User1 & { role: string };

  const newUser1: UserWithRole1 = {
    ...user1,
    role: "admin",
  };

  interface UserWithRole2 extends User2 {
    role: string;
  }

  const newUser2: UserWithRole2 = {
    ...user2,
    role: "admin",
  };

  //array

  type RollNumbers1 = number[];
  const rollNumbers1: RollNumbers1 = [1, 2, 3, 4, 5];

  //using interface
  interface RollNumbers2 {
    [index: number]: number;
  }

  const rollNumbers2: RollNumbers2 = [1, 2, 3, 4, 5];

  // ====== Function ======//

  // using type alias for function

  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;

  // using interface for function

  interface Sum {
    (num1: number, num2: number): number;
  }

  const sum: Sum = (num1, num2) => num1 + num2;
  // -------------------- END OF THE FILE -------------------- //
}

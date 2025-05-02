{
  //type alias

  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const student1: Student = {
    name: "John Doe",
    age: 25,
    gender: "male",
    contactNo: "01270000000",
    address: "Uganda",
  };
  const student2: Student = {
    name: "Tutul Kabir",
    age: 30,
    gender: "male",
    address: "Tanzania",
  };
  const student3: Student = {
    name: "Soyab Aktar",
    age: 21,
    gender: "male",
    address: "Finland",
  };

  //------------------------------------//
  //type alias for primitive types
  //string, number, boolean, null, undefined, symbol, bigint
  type UserName = string;
  type IsAdmin = boolean;

  type User = {
    id: number;
    name: UserName;
    isAdmin: IsAdmin;
  };

  const user: User = {
    id: 1,
    name: "John Doe",
    isAdmin: true,
  };

  //------------------------------------//
  //type alias for function
  type Add = (a: number, b: number) => number;
  const add: Add = (a, b) => a + b;
}

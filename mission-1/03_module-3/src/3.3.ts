{
  // ---------------------------Start---------------------------//
  //Type guard using typeof & in
  //typeof (typeof operator works in runtime)

  /*   const add = (
    param1: string | number,
    param2: string | number
  ): string | number => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  }; */

  type AlphaNumeric = string | number;

  const add = (param1: AlphaNumeric, param2: AlphaNumeric): AlphaNumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result1 = add(10, 20); //30
  const result2 = add("10", "20"); //1020
  const result3 = add("10", 20); //1020

  //   console.log(result1, result2, result3);

  //In guard

  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`I am an ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`I am ${user.name} and I am a normal user`);
    }
  };

  const user1: NormalUser = {
    name: "John",
  };

  const user2: AdminUser = {
    name: "John",
    role: "admin",
  };

  getUser(user1); //I am John and I am a normal user
  getUser(user2); //I am an John and my role is admin
  // ---------------------------End---------------------------//
}

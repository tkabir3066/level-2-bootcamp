{
  //----------------------------Start---------------------------//
  //spread operator

  const user1 = {
    name: "John",
    age: 30,
  };

  const user2 = {
    id: 1,
    ...user1,
    address: {
      city: "New York",
      state: "NY",
    },
  };

  //destructuring

  const {
    name,
    age,
    address,
    // address: { city, state },
  } = user2;

  console.log(name, age, address);

  const numbers1: number[] = [1, 2, 3, 4, 5];
  const numbers2: number[] = [0, ...numbers1, 6, 7, 8, 9, 10];

  // console.log(user2);
  // console.log(numbers2[6]);

  //rest operator

  function restFn(...nums: number[]): void {
    // console.log(nums);
  }

  restFn(1, 2, 3, 4, 5, 9);

  //----------------------------End---------------------------//
}

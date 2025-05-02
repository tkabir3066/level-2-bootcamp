{
  //destructuring

  //-- object destructuring --//
  const user = {
    id: 345,
    name: {
      firstName: "John",
      middleName: "Doe",
      lastName: "Smith",
    },
    contactNo: "01270000000",
    address: "Hind",
  };

  const {
    id,
    name: { middleName },
    contactNo,
    address,
  } = user;

  //array destructuring

  const myFriends: string[] = ["John", "Doe", "Smith", "Jane"];
  const [firstFriend, secondFriend, ...restOfFriends] = myFriends;
}

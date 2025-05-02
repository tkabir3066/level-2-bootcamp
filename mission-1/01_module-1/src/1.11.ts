{
  //---------start------------//
  //1.========= Ternary operator =========//

  const age: number = 18;
  //   if (age >= 18) {
  //     console.log("Adult");
  //   } else {
  //     console.log("Minor");
  //   }

  const isAdult = age >= 18 ? "Adult" : "Minor";
  console.log(isAdult); // Adult

  //nullish coalescing operator(if need to make decision based on null or undefined value)

  const isAuthenticated = null;

  const result1 = isAuthenticated ?? "Guest";
  console.log(result1); // Guest

  const result2 = isAuthenticated ? "User" : "Guest";
  console.log(result2); // Guest

  //2.========= Optional chaining operator =========//
  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "John Doe",
    address: {
      city: "New York",
      road: "5th Avenue",
      presentAddress: "123 Main St",
    },
  };

  console.log(
    user?.address?.permanentAddress ?? "No permanent address provided"
  ); // No permanent address provided
  //---------end------------//
}

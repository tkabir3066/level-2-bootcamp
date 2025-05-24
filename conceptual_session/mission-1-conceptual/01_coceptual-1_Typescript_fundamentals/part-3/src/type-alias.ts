{
  //type alias

  type TNickName = "John" | "Jack" | "Jill";
  const nickName: TNickName = "John";

  //intersection type

  type TUser = {
    name: string;
    age: number;
  } & {
    address: string;
  };

  const user: TUser = {
    name: "John",
    age: 30,
    address: "New York",
  };
}

{
  //learn spread operator
  const bros1: string[] = ["Mizan", "Nahid", "Sami"];
  const bros2: string[] = ["Bakka", "Shamim", "Bais"];

  //first way
  const allBros1: string[] = bros1.concat(bros2);
  //second way
  const allBros2: string[] = [...bros1, ...bros2];
  //third way
  bros1.push(...bros2);

  const mentors1 = {
    typescript: "Mizan",
    redux: "Nahid",
    dbms: "Mizan",
  };
  const mentors2 = {
    prisma: "Firoz",
    nextjs: "Tanmoy",
    cloud: "Nahid",
  };

  const mentorList = {
    ...mentors1,
    ...mentors2,
  };
  //Learn rest operator

  /*  const greetFriends = (friend1: string, friend2: string, friend3: string) => {
    return `Hello ${friend1}, ${friend2}, ${friend3}`;
  };

  greetFriends("Mizan", "Nahid", "Sami"); */

  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`Hello ${friend}`));
  };

  greetFriends("Mizan", "Nahid", "Sami", "Kabul", "Sabul", "Labul");
}

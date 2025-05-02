{
  //learning function

  //normal function
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  add(1, 2); // 3

  //arrow function

  const addArrow = (num1: number, num2: number): number => num1 + num2;

  // function in a object called method

  const poorUser = {
    username: "Tutul",
    balance: 0,
    addBalance(balance: number): string {
      this.balance += balance;
      return `My new balance is ${this.balance}`;
    },
  };

  // mapping an array

  const arr: number[] = [1, 2, 3, 4, 5];

  const newArr: number[] = arr.map((elm: number): number => elm * elm);
}

{
  // ---------------------------Start---------------------------//
  //getter and setter
  class BankAccount {
    readonly id: number;
    name: string;
    // private _balance: number;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    // addDeposit(amount: number) {
    //   this._balance = this._balance + amount;
    // }

    //using setter
    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }

    // getBalance() {
    //   return this._balance;
    // }

    //using getter
    get myBalance() {
      return this._balance;
    }
  }

  const goribManusherAccount = new BankAccount(111, "Mr. Tutul", 50);
  //   goribManusherAccount.addDeposit(3454565); //function call kore
  //   const myBalance = goribManusherAccount.getBalance(); //function call kore

  goribManusherAccount.deposit = 300; //using setter // property er moto byabohar kore
  const myBalance = goribManusherAccount.myBalance; //using getter //like property
  console.log(myBalance);
  // ---------------------------End---------------------------//
}

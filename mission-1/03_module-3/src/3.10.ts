{
  //--------------------------------------Start--------------------//

  //Encapsulation in OOP

  {
    // ---------------------------Start---------------------------//
    //access modifiers
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

      addDeposit(amount: number) {
        this._balance = this._balance + amount;
      }

      getBalance() {
        return this._balance;
      }
    }

    class StudentAccount extends BankAccount {
      test() {
        this.addDeposit(249);
        this.getBalance();
        this.id;
        this.name;
        //Parent class e _balance property ta private ache tai access korte parbe na// tai amra access korte pari tai private poriborte protected use korbo

        this._balance; //prtected use korar por use korte parchi
      }
    }

    const goribManusherAccount = new BankAccount(111, "Mr. Tutul", 50);
    goribManusherAccount.addDeposit(3454565);
    const myBalance = goribManusherAccount.getBalance();
    console.log(myBalance);
    // ---------------------------End---------------------------//
  }

  //--------------------------------------End--------------------//
}

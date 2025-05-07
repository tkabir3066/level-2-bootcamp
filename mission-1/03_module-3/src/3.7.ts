{
  // ---------------------------Start---------------------------//
  //static in OOP

  /*   class Counter {
    count: number = 0;
    increment() {
      this.count = this.count + 1;
      return this.count;
    }
    decrement() {
      return (this.count = this.count - 1);
    }
  }

  const instance1 = new Counter(); //different memory
  const instance2 = new Counter(); //different memory
  console.log(instance1.increment()); //1
  console.log(instance2.increment()); //1
  
  //  */

  /*   class Counter {
    static count: number = 0;
    increment() {
      return (Counter.count = Counter.count + 1);
    }
    decrement() {
      return (Counter.count = Counter.count - 1);
    }
  }

  //same momory te store korte gele static use korte hobe
  const instance1 = new Counter(); //same memory
  const instance2 = new Counter(); //same memory
  const instance3 = new Counter(); //same memory`

  //same memory te allocate hobe oporer instance 3 ta
  console.log(instance1.increment()); //1
  console.log(instance2.increment()); //2
  console.log(instance3.increment()); //3 */

  //class er method e static use korle class er naam dhore dakte hobe
  class Counter {
    static count: number = 0;
    static increment() {
      return (Counter.count = Counter.count + 1);
    }
    static decrement() {
      return (Counter.count = Counter.count - 1);
    }
  }
  a;

  //class er method e static use korle class er naam dhore dakte hobe

  console.log(Counter.increment()); //1
  console.log(Counter.increment()); //2
  console.log(Counter.increment()); //3
  // ---------------------------End---------------------------//
}

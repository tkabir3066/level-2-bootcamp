{
  // ---------------------------------Start-----------------------------------//
  //Abstraction in OOP
  //1. using interface (leader interface)

  //ekhane idea pacchi
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  //real implementation
  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log(`I am starting the car engine`);
    }
    stopEngine(): void {
      console.log(`I am stopping the car engine`);
    }

    move(): void {
      console.log(`I am moving the car`);
    }

    test() {
      console.log(`I am just testing`);
    }
  }

  const toyotaCar = new Car1();
  //   toyotaCar.startEngine();
  //   toyotaCar.stopEngine();
  //   toyotaCar.move();
  //   toyotaCar.test();

  //2. using abstract class (leader class)

  //normal class
  /*   class Car2 {
    startEngine(): void {
      console.log(`I am starting the car engine`);
    }
    stopEngine(): void {
      console.log(`I am stopping the car engine`);
    }

    move(): void {
      console.log(`I am moving the car`);
    }

    test() {
      console.log(`I am just testing`);
    }
  }

  const hondaCar = new Car2(); */

  //   abstract class (leader class)

  //idea
  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;

    abstract move(): void;

    test() {
      console.log(`I am just testing`);
    }
  }

  //Cannot create an instance of an abstract class (abstract class theke instance create korte parbo na chil class create korte hobe)
  //   const hondaCar = new Car2();

  class ToyotaCar extends Car2 {
    startEngine(): void {
      console.log(`I am starting the car engine`);
    }
    stopEngine(): void {
      console.log(`I am stopping the car engine`);
    }

    move(): void {
      console.log(`I am moving the car`);
    }
  }
  // ---------------------------------End-----------------------------------//
}

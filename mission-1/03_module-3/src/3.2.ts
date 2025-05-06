{
  // ---------------------------Start---------------------------//
  //Inheritance in OOP

  //parent class

  class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours} hours`);
    }
  }
  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  const student1 = new Student("John", 20, "New York");

  class Teacher extends Person {
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    takeClass(numOfClass: number) {
      console.log(`${this.name} will take ${numOfClass} classes`);
    }
  }

  const teacher1 = new Teacher("Goerge", 40, "New York", "Professor");
  teacher1.takeClass(10);
  teacher1.getSleep(8);

  // ---------------------------End---------------------------//
}

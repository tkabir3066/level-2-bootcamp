{
  //---------------------------------Start-----------------------------//
  //Polymorphism

  class Person {
    getSleep() {
      console.log(`I am sleeping for 8 hours a day`);
    }
  }

  class Student extends Person {
    getSleep() {
      console.log(`I am sleeping for 7 hours a day`);
    }
  }
  class Developer extends Person {
    getSleep() {
      console.log(`I am sleeping for 6 hours a day`);
    }
  }

  const getSleepingHours = (params: Person) => {
    params.getSleep();
  };
  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();

  //   getSleepingHours(person1);
  //   getSleepingHours(person2);
  //   getSleepingHours(person3);

  //   example-2

  class Shape {
    getShape(): number {
      return 0;
    }
  }

  //area of circle --> πr2 --> π*r*r
  class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    getShape(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  //area of rectangle = height * width
  class Rectangle extends Shape {
    height: number;
    width: number;

    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }
    getShape(): number {
      return this.height * this.width;
    }
  }

  const getShapeArea = (param: Shape) => {
    console.log(param.getShape());
  };

  const shape1 = new Shape();
  const shape2 = new Circle(5);
  const shape3 = new Rectangle(5, 10);

  getShapeArea(shape1); //0
  getShapeArea(shape2); //78.53981633974483
  getShapeArea(shape3); //50
  //---------------------------------End-----------------------------//
}

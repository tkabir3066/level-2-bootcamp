{
  // ---------------------------Start---------------------------//
  // Class and Object
  //OOP--> class

  /*   class Animal {
    name: string;
    species: string;
    sound: string;
    constructor(name: string, species: string, sound: string) {
      this.name = name;
      this.species = species;
      this.sound = sound;
    }

    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  } */

  //using parameters properties (simplifying the above code)
  class Animal {
    //parameter properties
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}

    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }
  const dog = new Animal("Germand Shephard", "Dog", "Bark1");
  const cat = new Animal("Persian", "Cat", "Meow1");

  dog.makeSound();
  cat.makeSound();
  // ---------------------------End---------------------------//
}

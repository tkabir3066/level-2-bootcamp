{
  //-----------Start-----------------//
  //Conditional types
  // Conditional types allow you to create types that depend on a condition.
  // They are defined using the `extends` keyword and can be used to create more flexible and reusable types.
  // Conditional types are a powerful feature of TypeScript that allows you to create types based on conditions.

  type a1 = number;
  type b1 = undefined;

  type x = a1 extends null ? true : false; //conditional type
  type y = a1 extends null ? true : b1 extends undefined ? true : false; //conditional type

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
  };

  type CheckVehicle<T> = T extends keyof Sheikh ? true : false; //conditional type

  type HasCar = CheckVehicle<"car">; //true
  type HasShip = CheckVehicle<"ship">; //true
  type HasPlane = CheckVehicle<"plane">; //false
  //-----------End-------------------//
}

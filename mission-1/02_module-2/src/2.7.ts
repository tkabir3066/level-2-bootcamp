{
  // -----------------------------Start------------------------------//
  //===========Generic Constraint using keyof operator ===========//

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; //manually defined

  type Owner2 = keyof Vehicle; //automatically defined

  const person1: Owner = "bike"; //manually defined

  const person2: Owner2 = "ship"; //automatically defined

  //   using keyof operator in generic function

  /*  const getPropertyValue = (obj: object, key: string) => {
    return obj[key];
  };
 */

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };
  const user = {
    name: "John",
    age: 30,
    address: "Kolkata",
  };

  const car = {
    name: "BMW",
    model: "X5",
    year: 2020,
  };
  const result1 = getPropertyValue(user, "name"); //string
  const result2 = getPropertyValue(car, "dfsd"); //string
  // -----------------------------End------------------------------//
}

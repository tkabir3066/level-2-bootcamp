{
  // ----------------------------Start----------------------------//
  //mapped types

  const arrayOfNumbers: number[] = [1, 2, 3, 4, 5];
  //   const arrayOfStrings: string[] = ["1", "2", "3", "4", "5"];

  const arrayOfStrings: string[] = arrayOfNumbers.map((num) => num.toString());
  console.log(arrayOfStrings);

  type AreaNumber = {
    height: number;
    width: number;
  };

  type Height = AreaNumber["height"]; //look up type
  //   type AreaString = {
  //     height: string;
  //     width: string;
  //   };

  //using mapped types to convert AreaNumber to AreaString
  /* type AreaString = {
    [K in "height" | "width"]: string;
  }; */

  type AreaString = {
    [K in keyof AreaNumber]: string;
  };

  //using generic mapped types to convert AreaNumber to AreaString

  type AreaStringGeneric<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaStringGeneric<{ height: string; width: number }> = {
    height: "100",
    width: 400,
  };
  // ----------------------------End----------------------------//
}

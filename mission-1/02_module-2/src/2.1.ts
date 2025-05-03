{
  // -------------------- START OF THE FILE -------------------- //
  //=== type assertion ===//
  let anything: any;

  anything = "Next Level Web Development";
  (anything as string).toLowerCase();
  (anything as string).toUpperCase();

  anything = 1234;
  (anything as number).toFixed(2);
  (anything as number).toString();

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The value in grams is ${convertedValue}`;
    }

    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = kgToGm(10) as number;
  const result2 = kgToGm("10") as string;

  // type assertion with using try-catch block
  type CustomError = {
    message: string;
  };
  try {
    //
  } catch (error) {
    console.log((error as CustomError).message);
  }
  // -------------------- END OF THE FILE -------------------- //
}

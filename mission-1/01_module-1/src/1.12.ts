{
  //------------------- start -------------------//
  // nullable types

  const searchName = (value: string | null) => {
    if (value) {
      console.log("Searching...");
    } else {
      console.log("There is nothing to search");
    }
  };

  //   searchName("John Doe"); // Searching...
  //   searchName(""); // There is nothing to search
  //   searchName(null); // There is nothing to search

  //====== unknown types ======//

  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`Speed in m/s: ${convertedSpeed}`);
    } else if (typeof value === "string") {
      const valueInNumber = value.split(" ");
      const [result, unit] = valueInNumber;
      const convertedSpeed = (parseFloat(result) * 1000) / 3600;
      console.log(`Speed in m/s: ${convertedSpeed}`);
    } else {
      console.log("Invalid input type. Please provide a number or a string.");
    }
  };

  getSpeedInMeterPerSecond(10); // Speed in m/s: 2.777777777777778
  getSpeedInMeterPerSecond("1000 km/h"); //Speed in m/s: 277.77777777777777

  //====== never types ======//

  const throwError = (message: string): never => {
    throw new Error(message);
  };

  throwError("Something went wrong"); // Error: Something went wrong
  // The function will never return a value

  //-------------------- end -------------------//
}

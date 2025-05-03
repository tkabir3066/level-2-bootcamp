{
  // -------------------- START OF THE FILE -------------------- //
  //Generic with interfaces
  //Generic with interfaces are a powerful feature of TypeScript that allow you to create reusable components that can work with any data type.

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartwatch: T;
    bike?: X;
  }

  /* const poorDeveloper: Developer<{
    brand: string;
    model: string;
    display: string;
  }> = {
    name: "Jane",
    computer: {
      brand: "Asus",
      model: "ROG Zephyrus G14",
      releaseYear: 2021,
    },
    smartwatch: {
      brand: "Realme",
      model: "Watch S",
      display: "AMOLED",
    },
  }; */

  type AsusSmartWatch = {
    brand: string;
    model: string;
    display: string;
  };
  const poorDeveloper: Developer<AsusSmartWatch> = {
    name: "Jane",
    computer: {
      brand: "Asus",
      model: "ROG Zephyrus G14",
      releaseYear: 2021,
    },
    smartwatch: {
      brand: "Realme",
      model: "Watch S",
      display: "AMOLED",
    },
  };

  /* const richDeveloper: Developer<{
    brand: string;
    model: string;
    hearTrack: boolean;
    sleepTrack: boolean;
  }> = {
    name: "John",
    computer: {
      brand: "Apple",
      model: "MacBook Pro",
      releaseYear: 2020,
    },
    smartwatch: {
      brand: "Apple",
      model: "Watch Series 6",
      hearTrack: true,
      sleepTrack: true,
    },
  }; */

  interface AppleSmartWatch {
    brand: string;
    model: string;
    hearTrack: boolean;
    sleepTrack: boolean;
  }

  type YamahaBike = {
    brand: string;
    engineCapacity: string;
  };
  const richDeveloper: Developer<AppleSmartWatch, YamahaBike> = {
    name: "John",
    computer: {
      brand: "Apple",
      model: "MacBook Pro",
      releaseYear: 2020,
    },
    smartwatch: {
      brand: "Apple",
      model: "Watch Series 6",
      hearTrack: true,
      sleepTrack: true,
    },
    bike: {
      brand: "Yamaha",
      engineCapacity: "150cc",
    },
  };
  // -------------------- END OF THE FILE -------------------- //
}

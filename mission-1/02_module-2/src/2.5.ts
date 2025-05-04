{
  // -------------------- START OF THE FILE -------------------- //
  // function with generic type

  const createArray = (params: string): string[] => {
    return [params];
  };
  const createArrayWithGeneric = <T>(params: T): T[] => {
    return [params];
  };

  const result1 = createArray("Bangladesh");
  const resultGenericString = createArrayWithGeneric<string>("Bangladesh");
  const resultGenericBoolean = createArrayWithGeneric<boolean>(true);

  /*  type User = {
    id: number;
    name: string;
    age: number;
  }; */

  interface User {
    id: number;
    name: string;
    age: number;
  }
  const resultGenericObj = createArrayWithGeneric<User>({
    id: 223,
    name: "John",
    age: 30,
  });

  //create array with tuple type

  const createArrayWithTuple = <T, Q>(params1: T, params2: Q): [T, Q] => {
    return [params1, params2];
  };

  const resultTuple1 = createArrayWithTuple<string, number>("Bangladesh", 101);
  const resultTupleString = createArrayWithTuple<string, boolean>(
    "Bangladesh",
    true
  );
  const resultTupleBoolean = createArrayWithGeneric<boolean>(true);

  /*  type User = {
    id: number;
    name: string;
    age: number;
  }; */

  interface User {
    id: number;
    name: string;
    age: number;
  }
  const resultTupleObj1 = createArrayWithTuple<User, string[]>(
    {
      id: 223,
      name: "John",
      age: 30,
    },
    ["Bangladesh", "India"]
  );
  const resultTupleObj2 = createArrayWithTuple<User, boolean>(
    {
      id: 223,
      name: "John",
      age: 30,
    },
    false
  );

  interface Student {
    name: string;
    age: number;
    email: string;
  }

  const addCourseToStudent = <T>(student: T): T => {
    const course = "Next Level Web Development";
    return { ...student, course };
  };

  const student1 = addCourseToStudent({
    name: "John",
    age: 30,
    email: "abc@gmail.com",
    devType: "MERN",
  });
  const student2 = addCourseToStudent({
    name: "John",
    age: 30,
    email: "abc@gmail.com",
    watchType: "Apple",
  });
  // -------------------- END OF THE FILE -------------------- //
}

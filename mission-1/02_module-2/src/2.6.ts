{
  //---------------------------Start---------------------------//
  //=========== Constraints in typescript ===========//
  // Constraints are used to restrict the type of a generic type variable.

  interface Student {
    id: number;
    name: string;
    email: string;
  }
  const addCourseToStudent = <T extends Student>(student: T): T => {
    const course = "Next Level Web Development";
    return { ...student, course };
  };

  const student1 = addCourseToStudent({
    id: 1,
    name: "John",
    email: "abc@gmail.com",
    age: 30,
    devType: "MERN",
  });
  const student2 = addCourseToStudent({
    id: 2,
    name: "John",
    email: "abc@gmail.com",
    age: 30,
    watchType: "Apple",
  });

  const student3 = addCourseToStudent({
    id: 3,
    name: "John",
    email: "abc@gmail.com",
    car: "BMW",
  });
  //---------------------------End---------------------------//
}

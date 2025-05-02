{
  //Union types and Intersection types
  //Union types: A type that can be one of several types
  //Intersection types: A type that is the intersection of several types

  //Union types

  /*   type FrontendDeveloper = "FakibazDeveloper" | "JuniorDeveloper";
  type FullstackDeveloper = "FrontendDeveloper" | "ExpertDeveloper";

  const newDeveloper: FrontendDeveloper = "FakibazDeveloper";

  type Developer = FrontendDeveloper | FullstackDeveloper;

  type User = {
    name: string;
    email?: string;
    gender: "male" | "female";
    age: number;
    bloodGroup: "A+" | "B+" | "AB+" | "O+" | "A-" | "B-" | "AB-" | "O-";
  };

  const user1: User = {
    name: "John Doe",
    gender: "male",
    age: 25,
    bloodGroup: "A+",
  }; */

  //intersection types
  type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };

  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

  const fullstackDeveloper: FullstackDeveloper = {
    skills: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
}

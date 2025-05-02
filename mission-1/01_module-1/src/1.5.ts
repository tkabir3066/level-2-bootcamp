//Reference Type --> Object
/* 
const user: {
  firstName: string;
  middleName: string;
  lastName: string;
} = {
  firstName: "John",
  middleName: "Doe",
  lastName: "Smith",
}; */

/* const user: {
  company: string;
  firstName: string;
  middleName?: string; // optional property
  lastName: string;
} = {
  company: "Programming Hero",
  firstName: "John",
  lastName: "Smith",
};
 */
/* 
const user: {
  company: "Programming Hero"; // literal type
  firstName: string;
  middleName?: string; // optional property
  lastName: string;
} = {
  company: "Programming Hero",
  firstName: "John",
  lastName: "Smith",
};
 */

const user: {
  readonly company: string; // literal type
  firstName: string;
  middleName?: string; // optional property
  lastName: string;
} = {
  company: "Programming Hero",
  firstName: "John",
  lastName: "Smith",
};

// user.company = ""; // Error: Cannot assign to 'company' because it is a read-only property.

const fs = require("fs");
console.log("Task 1");

const data = "Hello, world!";

fs.writeFile("./hello.txt", data, { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }
  console.log("File written successfully!", data);
});

fs.readFile("./hello.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log("Something went wrong: ", err);
    return;
  }
  console.log(data);
});

console.log("Task 3");

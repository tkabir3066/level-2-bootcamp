const fs = require("fs");

console.log("Task 1");

const text = "Learning file System";
fs.writeFileSync("./hello.txt", text);

console.log("Task 3");

const data = fs.readFileSync("./hello.txt", { encoding: "utf-8" });
console.log("Task 4");

console.log(data);

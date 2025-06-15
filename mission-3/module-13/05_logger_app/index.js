const path = require("path");
const fs = require("fs");

// console.log(process.argv);

const inputArguments = process.argv.slice(2);
const timestamp = new Date();
const text = `${inputArguments.join(" ")} : ${timestamp} \n`;

if (!text) {
  console.log("Please provide a message to log");
  console.log("Example: node index.js Hello World");
  process.exit(1);
}

// const filePath = __dirname + "\\log.txt";

// best way
const filePath = path.join(__dirname, "log.txt");

console.log(filePath);

fs.appendFile(filePath, text, { encoding: "utf-8" }, () => {
  console.log("Your log added successfully");
});

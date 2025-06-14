const EventEmitter = require("node:events");

class SchoolBell extends EventEmitter {}

const schoolBell = new SchoolBell();

schoolBell.on("ring", () => {
  console.log("Yahoo!! Class Sesh");
});
schoolBell.on("ring", () => {
  console.log("Dhatt! arekta class ache");
});
schoolBell.on("broken", () => {
  console.log("Ohh no! Class ki ar sesh hobe na!");
});

schoolBell.emit("ring");
schoolBell.emit("broken");

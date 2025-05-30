const EventEmitter = require("node:events");

class SchoolBell extends EventEmitter {}

const schoolBell = new SchoolBell();

schoolBell.on("ring", () => {
  console.log("Bell is ringing....");
});

schoolBell.on("ring", () => {
  console.log("cholo kichu ekta kheli....");
});

schoolBell.emit("ring");

schoolBell.on("broken", () => {
  console.log("Bell is broken....");
});

schoolBell.emit("broken");

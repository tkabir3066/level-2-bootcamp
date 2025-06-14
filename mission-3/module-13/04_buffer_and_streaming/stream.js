const fs = require("fs");

const readStream = fs.createReadStream("hello-world.txt", {
  encoding: "utf-8",
});

const writeStream = fs.createWriteStream("./hello.txt", { encoding: "utf-8" });

readStream.on("data", (data) => {
  console.log(data);

  writeStream.write(data, (err) => {
    if (err) {
      throw Error("Error ", err);
    }
  });
});

readStream.on("error", (err) => {
  if (err) {
    throw Error("Error ", err);
  }
});

//abar chaile writeStream er khetre o error ta alada bhabe handle korte pari
// writeStream.on("error", (err) => {
//   if (err) {
//     throw Error("Error ", err);
//   }
// });

readStream.on("end", () => {
  console.log("Reading ended");

  writeStream.end();
});

writeStream.on("finish", () => {
  console.log("Written finish");
});

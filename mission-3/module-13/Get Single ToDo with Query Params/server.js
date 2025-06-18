const http = require("http");
const path = require("path");
const fs = require("fs");

const filePath = path.join(__dirname, "./db/todo.json");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  //Get all todos
  if (req.url === "/todos" && req.method === "GET") {
    const data = fs.readFileSync(filePath, { encoding: "utf-8" });
    res.writeHead(200, {
      "content-type": "application/json",
    });

    res.end(data);
  }
  // Create a Todo
  else if (req.url === "/todos/create-todo" && req.method === "POST") {
    let data = "";
    req.on("data", (chunk) => {
      data = data + chunk;
    });

    req.on("end", () => {
      console.log(data);
      const todo = JSON.parse(data);
      const { title, body } = todo;
      const createdAt = new Date().toDateString();

      const allTodos = fs.readFileSync(filePath, { encoding: "utf-8" });
      const parsedAllTodos = JSON.parse(allTodos);
      parsedAllTodos.push({ title, body, createdAt });

      fs.writeFileSync(filePath, JSON.stringify(parsedAllTodos, null, 2), {
        encoding: "utf-8",
      });

      res.end(JSON.stringify({ title, body, createdAt }, null, 2));
    });
  }
  //Get single todo using query params
  else if (req.url === "/todo" && req.method === "GET") {
    // const data = fs.readFileSync(filePath, { encoding: "utf-8" });
    // res.writeHead(200, {
    //   "content-type": "application/json",
    // });

    res.end("Single todo");
  } else {
    res.end("404 : Route not found");
  }
});

server.listen(5000, "127.0.0.1", () => {
  console.log("Server is listening on port 5000");
});

/* 

/todos -> GET -> All Todo
/todos/create-todo --> POST --> Create todo

*/

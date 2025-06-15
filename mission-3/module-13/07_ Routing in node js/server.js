const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/todos" && req.method === "GET") {
    res.end("All todos");
  } else if (req.url === "/todos/create-todo" && req.method === "POST") {
    res.end("Todo Created");
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

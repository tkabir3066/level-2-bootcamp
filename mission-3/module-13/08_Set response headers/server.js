const http = require("http");

const data = [
  {
    title: "Introduction to JavaScript",
    body: "JavaScript is a versatile programming language used for web development.",
    createdAt: "2025-06-01T10:30:00Z",
  },
  {
    title: "Understanding React Hooks",
    body: "React Hooks let you use state and other features without writing a class.",
    createdAt: "2025-06-05T14:45:00Z",
  },
  {
    title: "Node.js Basics",
    body: "Node.js allows JavaScript to run on the server side.",
    createdAt: "2025-06-10T09:15:00Z",
  },
  {
    title: "MongoDB Crash Course",
    body: "MongoDB is a NoSQL database that stores data in JSON-like documents.",
    createdAt: "2025-06-12T11:00:00Z",
  },
  {
    title: "CSS Grid Tutorial",
    body: "CSS Grid is a layout system optimized for two-dimensional designs.",
    createdAt: "2025-06-14T16:25:00Z",
  },
];

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/todos" && req.method === "GET") {
    /*  res.writeHead(200, {
      "content-type": "text/plain",
      email: "tk@gmail.com",
    }); */
    /*   res.writeHead(200, {
      "content-type": "application/json",
    }); */

    res.writeHead(200, {
      "content-type": "text/html",
    });
    /*  res.setHeader("content-type", "text/plain");
    res.statusCode = 201; */

    // res.end(JSON.stringify(data));
    res.end(`<h1>Hello World!!!</h1>`);
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

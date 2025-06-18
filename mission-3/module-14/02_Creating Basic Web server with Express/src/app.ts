import express, { Application, Request, Response } from "express";
const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;

/* 

*server.ts --> server handling like starting, closing error handling of server, only  related to server

*app.ts  --> route handle, middleware, route related error etc

*app folder --> app business logic handling like create ,read, update, delete and database works

*/

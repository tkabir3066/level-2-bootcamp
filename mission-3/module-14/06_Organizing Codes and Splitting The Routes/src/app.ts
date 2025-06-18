import express, { Application } from "express";
import { todosRouter } from "./app/todos/todos.routes";

const app: Application = express();

app.use(express.json());

app.use("/todos", todosRouter);

export default app;

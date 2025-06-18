import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";

export const todosRouter = express.Router();

const filePath = path.join(__dirname, "../../../db/todo.json");

//to get all todos
todosRouter.get("/", (req: Request, res: Response) => {
  const data = fs.readFileSync(filePath, { encoding: "utf-8" });

  res.json(data);
});

//create a todo
todosRouter.post("/create-todo", (req: Request, res: Response) => {
  const data = req.body;
  console.log(data);
  res.json("Heii");
});

//get a single todo

todosRouter.get("/:title", (req: Request, res: Response) => {
  const { title, body } = req.body;

  console.log(title, body);
  res.json({ title, body });
});

// update a todo

todosRouter.put("/update-todo/:title", (req: Request, res: Response) => {
  const { title, body } = req.body;

  console.log(title, body);
  res.json({ title, body });
});
todosRouter.delete("/delete-todo/:title", (req: Request, res: Response) => {
  const { title, body } = req.body;

  console.log(title, body);
  res.json({ title, body });
});

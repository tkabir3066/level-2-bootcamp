import express, { Request, Response } from "express";

import { client } from "../../config/mongodb";
import { ObjectId } from "mongodb";

export const todosRouter = express.Router();

//to get all todos
todosRouter.get("/", async (req: Request, res: Response) => {
  const db = await client.db("todosDB");
  const collection = db.collection("todos");

  const cursor = collection.find({});
  const todos = await cursor.toArray();
  res.json(todos);
});

//create a todo
todosRouter.post("/create-todo", async (req: Request, res: Response) => {
  const { title, description, priority, isCompleted } = req.body;
  const db = await client.db("todosDB");
  const collection = db.collection("todos");

  /*   const result = await collection.insertOne({
    title: "Node.js",
    description: "Learn basics of Node.js",
    priority: "Medium",
    isCompleted: false,
  }); */

  await collection.insertOne({
    title,
    description,
    priority,
    isCompleted,
  });

  const cursor = collection.find({});
  const todos = await cursor.toArray();
  res.json(todos);
});

//get a single todo

todosRouter.get("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;

  const db = await client.db("todosDB");
  const collection = db.collection("todos");
  const todo = await collection.findOne({ _id: new ObjectId(id) });

  res.json(todo);
});

// update a todo

todosRouter.put("/update-todo/:id", async (req: Request, res: Response) => {
  const { title, description, priority, isCompleted } = req.body;
  const db = await client.db("todosDB");
  const collection = db.collection("todos");
  const id = req.params.id;

  const filter = { _id: new ObjectId(id) };

  const updatedTodo = await collection.updateOne(
    filter,
    { $set: { title, description, priority, isCompleted } },
    { upsert: true }
  );

  res.json(updatedTodo);
});
todosRouter.delete("/delete-todo/:id", async (req: Request, res: Response) => {
  const id = req.params.id;

  const db = await client.db("todosDB");
  const collection = db.collection("todos");
  const result = await collection.deleteOne({ _id: new ObjectId(id) });

  res.json({
    message: "Deleted Successfully",
  });
});

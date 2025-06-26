import express, { Application, Request, Response } from "express";
import { Schema, model } from "mongoose";
import Note from "./app/models/notes.model";
import { notesRouter } from "./app/controllers/notes.controller";
import { userRouter } from "./app/controllers/users.controller";

const app: Application = express();

app.use(express.json());

app.use("/notes", notesRouter);
app.use("/users", userRouter);

export default app;

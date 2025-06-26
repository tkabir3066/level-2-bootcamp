import express, { Request, Response } from "express";
import Note from "../models/notes.model";

export const notesRouter = express.Router();

//crating a data
notesRouter.post("/create-note", async (req: Request, res: Response) => {
  const body = req.body;
  //Approach-1 of crating a data
  /*   const myNote = new Note({
    title: "I am learning Mongoose",
    });
    const note = await myNote.save();
 */

  //approach-2
  const note = await Note.create(body);
  res.status(201).json({
    success: true,
    message: "Note created successfully",
    note,
  });
});

// get all notes
notesRouter.get("/", async (req: Request, res: Response) => {
  // const notes = await Note.find({});
  const notes = await Note.find().populate("user");

  res.status(200).json({
    success: true,
    notes,
  });
});
// get single note
notesRouter.get("/:noteId", async (req: Request, res: Response) => {
  const noteId = req.params.noteId;
  const note = await Note.findById(noteId);
  // const note = await Note.findOne({ _id: noteId });

  res.status(200).json({
    success: true,
    note,
  });
});

// update single note
notesRouter.patch("/:noteId", async (req: Request, res: Response) => {
  const updatedBody = req.body;

  const noteId = req.params.noteId;
  // const note = await Note.findByIdAndUpdate(noteId, updatedBody, { new: true });
  const note = await Note.findOneAndUpdate({ _id: noteId }, updatedBody, {
    new: true,
  });
  // const note = await Note.updateOne({ _id: noteId }, updatedBody, {
  //   new: true,
  // });

  res.status(200).json({
    success: true,
    note,
  });
});

// delete single note
notesRouter.delete("/:noteId", async (req: Request, res: Response) => {
  const noteId = req.params.noteId;
  const note = await Note.findByIdAndDelete(noteId);
  // const note1 = await Note.findOneAndDelete({ _id: noteId });
  // const note2 = await Note.deleteOne({ _id: noteId });

  res.status(200).json({
    success: true,
    message: "Note Deleted Successfully",
    note,
  });
});

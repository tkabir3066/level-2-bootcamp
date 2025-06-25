import express, { Request, Response } from "express";
import User from "../models/user.model";

export const userRouter = express.Router();

//create a new user
userRouter.post("/create-user", async (req: Request, res: Response) => {
  const body = req.body;

  const user = await User.create(body);

  res.json({
    success: true,
    message: "User created successfully",
    user,
  });
});
//Get all users
userRouter.get("/", async (req: Request, res: Response) => {
  const allUsers = await User.find({});

  res.json({
    success: true,
    message: "User created successfully",
    allUsers,
  });
});

//Get single user
userRouter.get("/:userId", async (req: Request, res: Response) => {
  const userId = req.params.userId;

  const getSingleUser = await User.findById(userId);

  res.json({
    success: true,
    message: "User created successfully",
    getSingleUser,
  });
});
//Update user
userRouter.patch("/:userId", async (req: Request, res: Response) => {
  const updatedBody = req.body;
  const userId = req.params.userId;

  const updatedUser = await User.findByIdAndUpdate(userId, updatedBody, {
    new: true,
  });

  res.json({
    success: true,
    message: "User Updated successfully",
    updatedUser,
  });
});

//Delete a user
userRouter.delete("/:userId", async (req: Request, res: Response) => {
  const userId = req.params.userId;

  const deletedUser = await User.findByIdAndDelete(userId);

  res.json({
    success: true,
    message: "User deleted successfully",
    deletedUser,
  });
});

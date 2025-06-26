import { Request, Response } from "express";
import mongoose from "mongoose";
import { Server } from "http";
import app from "./app";

let server: Server;

const PORT = 5000;

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://tutulkabir:Tk3066abd%40@cluster0.vzz24au.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0"
    );

    console.log("Connected to mongoDB Database ");
    server = app.listen(PORT, () => {
      console.log(`Server is listening on port: ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();

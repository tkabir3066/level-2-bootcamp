import app from "./app";
import { client } from "./config/mongodb";

let server;

const PORT = 5000;

const bootstrap = async () => {
  // Connect the client to the server
  await client.connect();
  console.log("mongoDB connected successfully");
  server = app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
  });
};

bootstrap();

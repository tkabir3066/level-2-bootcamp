import app from "./app";

let server;

const PORT = 5000;

const bootstrap = async () => {
  server = app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
  });
};

bootstrap();

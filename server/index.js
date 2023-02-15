console.clear();

import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello from backend <3",
  });
});

/**
 * It's a function that starts the server and logs a message to the console if the server starts
 * successfully.
 */
const startServer = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server started successfully on ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

startServer();

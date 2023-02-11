import express from "express";
import * as dotenv from 'dotenv'

const PORT = process.env.PORT;
const app = express();

dotenv.config();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello from backend <3",
  });
});

app.listen(PORT, () => console.log(`Server started successfully on ${PORT}`));

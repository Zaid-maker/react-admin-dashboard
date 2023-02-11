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

app.listen(PORT, () => console.log(`Server started successfully on ${PORT}`));

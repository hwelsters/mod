// Third party imports
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

import authRoute from "./routes/authRoute";

const port = process.env.PORT || 4000;

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRoute);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json("TEST:: BASE URL");
});

app.listen(port, () => {
  console.log("BACKEND IS RUNNING");
});

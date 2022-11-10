// Third party imports
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

import authRoute from "./routes/authRoute";
import shopRoute from "./routes/shopRoute";
import posesRoute from "./routes/posesRoute";

const port = process.env.PORT || 4000;

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/shop", shopRoute);
app.use("/api/poses", posesRoute);

app.get("/api", (req: Request, res: Response) => {
  res.status(200).json("TEST:: BASE URL");
});

app.listen(port, () => {
  console.log("BACKEND IS RUNNING");
});
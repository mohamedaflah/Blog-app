import "dotenv/config";
import express, { Application } from "express";

import cors from "cors";
import "../config/mongo.config";
import cookieParser from "cookie-parser";
const app: Application = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(cookieParser());

app.listen(process.env.PORT!, () => {
  console.log("Server started");
});

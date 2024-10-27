import "dotenv/config";
import express, { Application } from "express";

import cors from "cors";
import "../config/mongo.config";
import cookieParser from "cookie-parser";
import { errorHandler } from "../middlewares/error-handler";
import userRouter from "../routes/user.router";
import blogRoute from "../routes/blog.route";
const app: Application = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json());

app.use(cookieParser());

app.use(`/api/user`, userRouter);
app.use(`/api/blogs`, blogRoute);
app.use(errorHandler);
app.listen(process.env.PORT!, () => {
  console.log("Server started");
});

import mongoose from "mongoose";

mongoose
  .connect(process.env.DB_CONNECTION_URI!, { dbName: "BlogApp" })
  .then(() => {
    console.log(`Connected to mongodb cluster`);
  })
  .catch((er) => {
    console.log(`Failed mongodb connection ${er}`);
  });

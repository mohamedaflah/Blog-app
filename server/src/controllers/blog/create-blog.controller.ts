import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import Blog from "../../models/blog.model";

export const createBlog = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.body?.user) {
      req.body.user = new mongoose.Types.ObjectId(req.body.user);
    }
    const blog = new Blog(req.body);
    await blog?.save();
    return res
      .status(201)
      .json({ status: true, message: "Blog saved successfully" });
  } catch (error) {
    next(error);
  }
};

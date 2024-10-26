import { NextFunction, Request, Response } from "express";
import Blog from "../../models/blog.model";
import mongoose from "mongoose";

export const updateBlogViewCount = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { blogId, userId } = req.body;
    const blog = await Blog.findOne({ _id: blogId });
    if (!blog) {
      throw new Error("Blog not found");
    }
    if (blog) {
      const userIdConverted = new mongoose.Types.ObjectId(userId);
      blog.viewedUsers.push(userIdConverted);
      await blog.save();
    }
    return res
      .status(200)
      .json({
        status: true,
        message: "success",
        viewedUsers: blog.viewedUsers,
      });
  } catch (error) {
    next(error);
  }
};

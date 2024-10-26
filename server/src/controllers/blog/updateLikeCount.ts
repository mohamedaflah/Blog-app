import { NextFunction, Request, Response } from "express";
import Blog from "../../models/blog.model";
import mongoose from "mongoose";

export const updateBlogLike = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { blogId, userId, type } = req.body;
    const blog = await Blog.findOne({ _id: blogId });
    if (!blog) {
      throw new Error("Blog not found");
    }
    if (blog) {
      const userIdConverted = new mongoose.Types.ObjectId(userId);
      if (type == "like") {
        blog.likedUsers.push(userIdConverted);
      } else {
        blog.likedUsers = blog.likedUsers.filter(
          (id) => id !== userIdConverted
        );
      }
      await blog.save();
    }
    return res.status(200).json({
      status: true,
      message: "success",
      likedUsers: blog.likedUsers,
    });
  } catch (error) {
    next(error);
  }
};

import { NextFunction, Request, Response } from "express";
import Blog from "../../models/blog.model";
import mongoose from "mongoose";
import { decodejwtToken } from "../../lib/decode-token";

export const updateBlogController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { blogId, data } = req.body;
    const existingBlog = await Blog.findById(blogId);
    const token = String(req.cookies[process.env.TOKEN_COOKIE_LABEL!]);
    const payload = decodejwtToken(token) as JWTPaylodType;
    if (payload?.role !== "admin") {
      if (payload?.id !== data?.user) {
        throw new Error("No access to update this blog");
      }
    }
    if (data?.user) {
      data.user = new mongoose.Types.ObjectId(data?.user);
    }
    const updatedData = {
      ...existingBlog?.toObject(), // Get existing data
      ...data, // Merge with new data
      likedUsers: existingBlog?.likedUsers,
      viewedUsers: existingBlog?.viewedUsers,
      sharedUsers: existingBlog?.sharedUsers,
    };
    await Blog.updateOne({ _id: blogId }, { $set: updatedData });
    return res
      .json({ status: true, message: "Blog updated successfully" })
      .status(200);
  } catch (error) {
    next(error);
  }
};

import { NextFunction, Request, Response } from "express";
import Blog from "../../models/blog.model";

export const updateBlogStatus = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { blogId, status } = req.body;
    await Blog.updateOne({ _id: blogId }, { $set: { status: status } });
    return res.status(200).json({
      status: true,
      blogStatus: status,
      blogId,
      message: "Blog status updated successfully",
    });
  } catch (error) {
    next(error);
  }
};

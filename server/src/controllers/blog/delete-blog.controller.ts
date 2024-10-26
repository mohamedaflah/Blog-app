import { NextFunction, Request, Response } from "express";
import { decodejwtToken } from "../../lib/decode-token";
import Blog from "../../models/blog.model";

export const deleteBlogController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { blogId, userId } = req.query;
    const token = String(req.cookies[process.env.TOKEN_COOKIE_LABEL!]);
    const payload = decodejwtToken(token) as JWTPaylodType;
    if (payload?.id !== userId && payload?.role !== "admin") {
      throw new Error("No access to delete this blog");
    }
    await Blog.deleteOne({ _id: blogId });
    return res.status(200).json({status:true,message:"Deleted!"})
  } catch (error) {
    next(error);
  }
};

import { NextFunction, Request, Response } from "express";
import { decodejwtToken } from "../../lib/decode-token";
import Blog from "../../models/blog.model";

export const getBlogByUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    
    const token = req.cookies[process.env.TOKEN_COOKIE_LABEL!];
    if (!token) {
      throw new Error("No token found");
    }
    const payload = await decodejwtToken(token);
    if (!payload) {
      throw new Error("Payload not found");
    }
    const blogs = await Blog.find({ user: payload?.id });
    res.status(200).json({ status: true, messages: "Success", blogs });
  } catch (error) {
    next(error);
  }
};

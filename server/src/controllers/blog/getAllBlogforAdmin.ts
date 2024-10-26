import { NextFunction, Request, Response } from "express";
import { decodejwtToken } from "../../lib/decode-token";
import Blog from "../../models/blog.model";
import User from "../../models/user.model";

export const getAllBlogForAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const blogs = await Blog.aggregate([
      {
        $lookup: {
          from: User.collection.name,
          localField: "user",
          foreignField: "_id",
          as: "userDetail",
        },
      },
      {
        $unwind: "$userDetail",
      },
    ]);
    res.status(200).json({ status: true, messages: "Success", blogs });
  } catch (error) {
    next(error);
  }
};

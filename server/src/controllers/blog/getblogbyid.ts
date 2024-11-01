import { NextFunction, Request, Response } from "express";
import Blog from "../../models/blog.model";
import mongoose from "mongoose";
import User from "../../models/user.model";

export const getBlogById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const blog = await Blog.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(id),
        },
      },
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
    res.status(200).json({ status: true, blog:blog[0] });
  } catch (error) {
    next(error);
  }
};

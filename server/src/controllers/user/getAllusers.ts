import { NextFunction, Request, Response } from "express";
import User from "../../models/user.model";

export const getAllusers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await User.find({});
    return res.send(200).json({ users, status: true, message: "Successful" });
  } catch (error) {
    next(error);
  }
};

import { NextFunction, Request, Response } from "express";
import User from "../../models/user.model";

export const blockUserStatus = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId, status } = req.body;

    await User.updateOne({ _id: userId }, { $set: { status: status } });
    res.send(200).json({ status: status, message: "Successful", userId });
  } catch (error) {
    next(error);
  }
};

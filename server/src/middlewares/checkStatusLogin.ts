import { NextFunction, Request, Response } from "express";
import { decodejwtToken } from "../lib/decode-token";
import User from "../models/user.model";

export const checkUserStatusForLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(401).json({
        status: false,
        message: "User Not found",
      });
      return;
    }

    if (!user?.status) {
      res.status(401).json({
        status: false,
        message: "You access has been denied by admin",
      });
      return;
    }
    next();
  } catch (error) {
    next(error);
  }
};

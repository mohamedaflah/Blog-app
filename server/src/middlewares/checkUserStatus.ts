import { NextFunction, Request, Response } from "express";
import { decodejwtToken } from "../lib/decode-token";
import User from "../models/user.model";

export const checkUserStatus = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies[process.env.TOKEN_COOKIE_LABEL!];
    console.log("🚀 ~ token:", token)
    if (!token) {
      throw new Error("User not authenticated.");
    }
    const payload =await decodejwtToken(token) as unknown as {
      id: string;
      role: "user" | "admin";
    };
    if (!payload) {
      throw new Error("Payload not found");
    }
    
    const user = await User.findOne({ _id: payload.id });
    if (!user?.status) {
      res.status(401).json({
        status: false,
        message: "You access has been denied by admin",
      });
      return
    }
    next();
  } catch (error) {
    next(error);
  }
};

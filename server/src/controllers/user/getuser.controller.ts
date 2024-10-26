import { NextFunction, Request, Response } from "express";
import User from "../../models/user.model";
import { hashPassword } from "../../lib/hashPassword";
import { generateJWT } from "../../lib/generateToken";
import { comparePassword } from "../../lib/comparePassword";
import { decodejwtToken } from "../../lib/decode-token";

export const userGetController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies[process.env.TOKEN_COOKIE_LABEL!];
    const payload = decodejwtToken(token) as {
      id: string;
      role: "admin" | "user";
    };
    const userExist = await User.findOne({ _id: payload?.id });

    res
      .status(200)
      .json({ status: true, message: "Successful", user: userExist });
  } catch (error) {
    next(error);
  }
};

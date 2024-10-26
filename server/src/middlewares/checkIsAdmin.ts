import { NextFunction, Request, Response } from "express";
import { decodejwtToken } from "../lib/decode-token";

export const checkIsAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies[process.env.TOKEN_COOKIE_LABEL!];
    if (!token) {
      return res.status(400).json({ status: false, message: "Unauthorized " });
    }
    const payload = decodejwtToken(token) as {
      id: string;
      role: "user" | "admin";
    };
    if (!payload) {
      return res.status(400).json({ status: false, message: "Unauthorized " });
    }
    if (payload.role !== "admin") {
      return res
        .status(403)
        .json({ status: false, message: "Not Accessible " });
    }
    next();
  } catch (error) {
    next(error);
  }
};

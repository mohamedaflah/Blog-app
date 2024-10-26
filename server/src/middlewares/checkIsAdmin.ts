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
      res.status(400).json({ status: false, message: "Unauthorized " });
      return;
    }
    const payload = decodejwtToken(token) as {
      id: string;
      role: "user" | "admin";
    };
    if (!payload) {
      res.status(400).json({ status: false, message: "Unauthorized " });
      return
    }
    if (payload.role !== "admin") {
      res.status(403).json({ status: false, message: "Not Accessible " });
      return;
    }
    next();
  } catch (error) {
    next(error);
  }
};

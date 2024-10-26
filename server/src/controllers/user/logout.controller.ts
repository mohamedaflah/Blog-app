import { NextFunction, Request, Response } from "express";

export const userLogoutController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.clearCookie(process.env?.TOKEN_COOKIE_LABEL!);
    return res
      .status(200)
      .json({ status: true, message: "Successfull", user: null });
  } catch (error) {
    next(error);
  }
};

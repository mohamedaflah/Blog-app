import { NextFunction, Request, Response } from "express";
import User from "../../models/user.model";
import { hashPassword } from "../../lib/hashPassword";
import { generateJWT } from "../../lib/generateToken";

export const userSignupController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { fullname, email, designation, password, role } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
      res.status(400).json({
        status: false,
        message: "User already exists with this email.",
      });
      return;
    }
    const user = new User({
      email,
      password: hashPassword(password),
      role,
      fullname,
      designation,
    });
    await user.save();
    const token = await generateJWT({ id: user?._id, role: role });
    res.cookie(process.env?.TOKEN_COOKIE_LABEL!, token, {
      maxAge: 22 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Only send cookie over HTTPS in production
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      domain: process.env.CLIENT_ORIGIN!,
    });
    res.status(201).json({ status: true, message: "Successfull", user });
  } catch (error) {
    next(error);
  }
};

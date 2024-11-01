import { NextFunction, Request, Response } from "express";
import User from "../../models/user.model";
import { hashPassword } from "../../lib/hashPassword";
import { generateJWT } from "../../lib/generateToken";
import { comparePassword } from "../../lib/comparePassword";

export const userLoginController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
   
    
    const userExist = await User.findOne({ email: email });
  
    if (!userExist) {
      res.status(404).json({
        status: false,
        message: "Invalid username or password",
      });
      return;
    }
    const passwordIsMatch = comparePassword(userExist?.password, password);
    if (!passwordIsMatch) {
      res.status(400).json({
        status: false,
        message: "Invalid username or password",
      });
      return;
    }
    const token =await generateJWT({ id: userExist?._id, role: userExist?.role });
    console.log("🚀 ~ token:", token)
    res.cookie(process.env?.TOKEN_COOKIE_LABEL!, token, {
      maxAge: 22 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Only send cookie over HTTPS in production
      sameSite: "lax", // Lax is usually safe for auth cookies
    });

    res
      .status(200)
      .json({ status: true, message: "Successfull", user: userExist });
  } catch (error) {
    next(error);
  }
};

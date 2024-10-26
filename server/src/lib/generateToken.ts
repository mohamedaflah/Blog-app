import jwt from "jsonwebtoken";
export const generateJWT = (payload: any) => {
  return jwt.sign(payload, process.env.TOKEN_SECRET!, { expiresIn: "22d" });
};

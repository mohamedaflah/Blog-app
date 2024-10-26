import jwt from "jsonwebtoken";
export const decodejwtToken = (token: string) => {
  return jwt.verify(token, process.env.TOKEN_SECRET!);
};

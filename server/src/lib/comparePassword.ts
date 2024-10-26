import bcrypt from "bcryptjs";
export const comparePassword = (hashedPass: string, newPass: string) => {
  return bcrypt.compareSync(newPass, hashedPass);
};

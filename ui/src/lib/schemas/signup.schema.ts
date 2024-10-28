import { z } from "zod";

export const signupSchema = z.object({
  fullname: z.string().min(3).max(50),
  email: z.string().email(),
  designation: z.string().min(3).max(50),
  password: z.string().min(8).max(50),
});

import { z } from "zod";

export const signupSchema = z.object({
  fullname: z
    .string()
    .min(3, { message: "Full name must be at least 3 characters long." })
    .max(50, { message: "Full name must be no more than 50 characters long." }),

  email: z.string().email({ message: "Please enter a valid email address." }),

  designation: z
    .string()
    .min(3, { message: "Designation must be at least 3 characters long." })
    .max(50, {
      message: "Designation must be no more than 50 characters long.",
    }),

  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." }),
});

import { z } from "zod";

const register = z
  .object({
    name: z
      .string({ required_error: "name is required" })
      .refine((value) => value !== "", { message: "name is required" }),
    email: z
      .string({ required_error: "email is required" })
      .email({ message: "invalid email address" }),
    password: z
      .string({ required_error: "password is required" })
      .refine((value) => value !== "", { message: "password is required" })
      .refine((value) => value.length >= 6, {
        message: "password must be more then 5 character",
      }),
    role: z.enum(["user", "admin"]).optional(),
    confirmPassword: z
      .string({ required_error: "confirmPassword is required" })
      .refine((value) => value !== "", {
        message: "confirmPassword is required",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const login = z.object({
  email: z
    .string({ required_error: "email is required" })
    .email({ message: "invalid email address" })
    .refine((value) => value !== "", { message: "email is required" }),
  password: z
    .string({ required_error: "password is required" })
    .refine((value) => value !== "", { message: "password is required" }),
});

const userSchemaValidation = {
  register,
  login,
};
export default userSchemaValidation;

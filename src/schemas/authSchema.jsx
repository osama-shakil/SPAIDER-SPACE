import * as z from "zod";


 const LoginSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" })
});

 const SignUpSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long")
});

 const resetPasswordSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
});
  module.exports = {
    LoginSchema,
    SignUpSchema,
    resetPasswordSchema
  };
  
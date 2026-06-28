import * as z from "zod";

export const signUpSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be 8 characters or more"),
  marketingEmails: z.boolean(),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms of service to continue",
  }),
});

export type SignUpFormValues = z.infer<typeof signUpSchema>;

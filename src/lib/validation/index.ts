import { z } from "zod"
 
export const SignUpValidation = z.object({
  name: z.string().min(3, { message: "Too short"}),
  username: z.string().min(3, { message: "Too short"}),
  email: z.string().email(),
  password: z.string().min(8, { message: "Password must contain at least 8 symbols"}),
})
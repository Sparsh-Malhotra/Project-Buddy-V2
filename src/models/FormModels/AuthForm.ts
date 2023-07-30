import * as z from 'zod'

const loginFormSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address',
  }),
  password: z.string().nonempty({
    message: 'Please enter your password',
  }),
  rememberUser: z.boolean().default(false).optional(),
})

const signupFormSchema = z.object({
  name: z.string().nonempty({
    message: 'Name is required',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address',
  }),
  password: z.string().nonempty({
    message: 'Password is required',
  }),
})

export { loginFormSchema, signupFormSchema }

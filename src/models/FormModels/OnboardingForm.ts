import { isUrl } from "@/lib/utils";
import * as z from "zod";

const step1Schema = z.object({
  firstName: z.string().trim().nonempty({
    message: "First Name is required",
  }),
  lastName: z.string().trim().nonempty({
    message: "Last Name is required",
  }),
  age: z
    .string()
    .nonempty({ message: "Age is required" })
    .refine((val) => !isNaN(+val) && !isNaN(parseFloat(val)), {
      message: "Age must be a number",
    })
    .refine((val) => Number(val) >= 10 || Number(val) <= 100, {
      message: "Age must be greater than 10 and less than 100",
    }),
  gender: z.enum(["male", "female", "none"], {
    required_error: "Gender is required",
  }),
  university: z.string().trim().nonempty({
    message: "University is required",
  }),
  course: z.string().trim().nonempty({
    message: "Course is required",
  }),
  state: z.string().trim().nonempty({ message: "State is required" }),
});

const step2Schema = z.object({
  techStack: z
    .string()
    .nonempty({ message: "Preferred Tech Stack is required" }),
  skills: z.string().array().nonempty({ message: "Skills is required" }),
  linkedin: z
    .string()
    .trim()
    .nonempty({
      message: "LinkedIn is required",
    })
    .url({
      message: "Please enter a valid URL",
    }),
  github: z
    .string()
    .trim()
    .nonempty({
      message: "Github is required",
    })
    .url({
      message: "Please enter a valid URL",
    }),
  twitter: z
    .string()
    .trim()
    .optional()
    .refine((val) => (val ? isUrl(val) : true), {
      message: "Please enter a valid URL",
    }),
  dribble: z
    .string()
    .trim()
    .optional()
    .refine((val) => (val ? isUrl(val) : true), {
      message: "Please enter a valid URL",
    }),
});

const step3Schema = z.object({
  type: z.enum(["student", "professional"], {
    required_error: "This is required",
  }),
  about: z.string().nonempty({
    message: "This is required",
  }),
});

export { step1Schema, step2Schema, step3Schema };

import { urlPattern } from "@/constants/regex";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isUrl = (str: string) => {
  const pattern = new RegExp(urlPattern);
  return pattern.test(str);
};

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import stc from "string-to-color";

// dynamic classnames
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// generates a random color based on a string
export const stringToColor = (str: string) => {
  return stc(str);
};
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isActivePath(path: string) {
  if (typeof window !== "undefined") {
    return window.location.pathname === path
  }
}
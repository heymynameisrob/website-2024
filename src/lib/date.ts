import { format } from "date-fns";

export function formatDate(date: string | Date) {
  return format(new Date(date), "MMMM dd, yyyy");
}
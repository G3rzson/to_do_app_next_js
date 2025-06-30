import z from "zod";

export const todoSchema = z.object({
  todo: z
    .string()
    .min(1, { message: "A feladat megadása kötelező." })
    .max(50, { message: "A feladat legfeljebb 50 karakter lehet." })
    .trim(),
});
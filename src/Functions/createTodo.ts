"use server";
import { prisma } from "@/db";
import { todoSchema } from "@/validation/todoSchema";
import { redirect } from "next/navigation";

export async function createTodo(formData: FormData) {
  const todo = formData.get("todo")?.toString();

  const result = todoSchema.safeParse({ todo });

  if (!result.success) {
    // Itt kezelheted a hibát (pl. hibalog, visszajelzés, stb.)
    return {
      error: result.error.flatten().fieldErrors.todo?.[0] ?? "Érvénytelen adat.",
    };
  }

  await prisma.todo.create({
    data: {
      todo: result.data.todo,
    },
  });

  redirect("/");
}

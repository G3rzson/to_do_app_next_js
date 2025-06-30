"use server";
import { prisma } from "@/db";
import { redirect } from "next/navigation";
import { todoSchema } from "@/validation/todoSchema";

export async function editTodo(formData: FormData) {
  const id = formData.get("id")?.toString();
  const todo = formData.get("todo")?.toString();

  // Validálás hiányzó mezőkre
  if (!id || !todo) return;

  // Zod validáció
  const result = todoSchema.safeParse({ todo });

  if (!result.success) {
    return {
      error: result.error.flatten().fieldErrors.todo?.[0] ?? "Érvénytelen adat.",
    };
  }

  // Frissítés
  await prisma.todo.update({
    where: { id },
    data: {
      todo: result.data.todo,
    },
  });

  redirect("/");
}

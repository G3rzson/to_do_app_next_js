import { prisma } from "@/db";
import { redirect } from "next/navigation";

export async function editTodo(formData: FormData) {
  "use server";
  
  const id = formData.get("id") as string;
  const todo = formData.get("todo") as string;

  if (!id || !todo) return;

  await prisma.todo.update({
    where: { id },
    data: { todo },
  });

  redirect("/")
}

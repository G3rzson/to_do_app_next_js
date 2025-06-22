"use server";
import { prisma } from "@/db";
import { redirect } from "next/navigation";

export async function createTodo(formData: FormData) {
  const todo = formData.get("todo")?.toString();

  if (!todo) return;

  await prisma.todo.create({ data: { todo } });

  redirect("/");
}

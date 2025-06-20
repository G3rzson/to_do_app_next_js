import { prisma } from "@/db";
import { redirect } from "next/navigation";

export async function createTodo(data: FormData) {
  "use server";
  const todo = data.get("todo")?.valueOf();
  if (typeof todo !== "string" || todo.length === 0) {
    throw new Error("Invalid title");
  }

  await prisma.todo.create({
    data: { todo },
  });
  redirect("/");
}
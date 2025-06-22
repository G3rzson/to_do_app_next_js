"use server";
import { prisma } from "@/db";
import { revalidatePath } from "next/cache";

export async function deleteTodo(id: string) {
  await prisma.todo.delete({
    where: { id },
  });
  revalidatePath("/");
}
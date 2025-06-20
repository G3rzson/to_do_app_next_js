import { prisma } from "@/db";

export async function getTodoById(id: string) {
  return prisma.todo.findUnique({
    where: { id },
  });
}

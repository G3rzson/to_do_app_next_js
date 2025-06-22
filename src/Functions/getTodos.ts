import { prisma } from "@/db";

export async function getTodos() {
  return prisma.todo.findMany();
}

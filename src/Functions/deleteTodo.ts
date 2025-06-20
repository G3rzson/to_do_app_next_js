import { prisma } from "@/db";
import { revalidatePath } from "next/cache";

export async function deleteTodo(id: string) {
  "use server";

  await prisma.todo.delete({
    where: { id },
  });
  revalidatePath("/");
}
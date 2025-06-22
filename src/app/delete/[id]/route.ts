import { prisma } from "@/db";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const id = request.nextUrl.pathname.split("/").pop();
  if (!id) {
    throw new Error("Hiányzó ID");
  }

  await prisma.todo.delete({
    where: { id },
  });

  redirect("/");
}

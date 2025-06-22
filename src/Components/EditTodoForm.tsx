"use client";

import { useTransition } from "react";
import { editTodo } from "@/Functions/editTodo";

type Todo = {
  id: string;
  todo: string;
};

type EditTodoFormProps = {
  todo: Todo;
};

export default function EditTodoForm({ todo }: EditTodoFormProps) {
  const [isPending, startTransition] = useTransition();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    startTransition(() => editTodo(formData));
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 my-8">
      <label className="text-2xl text-center mb-8">Feladat szerkesztése</label>
      <input type="hidden" name="id" value={todo.id} />
      <input
        type="text"
        name="todo"
        defaultValue={todo.todo}
        className="outline-none border bg-transparent border-zinc-200 rounded p-2"
      />
      <button
        type="submit"
        disabled={isPending}
        className="rounded cursor-pointer bg-green-800 hover:bg-green-700 disabled:bg-zinc-500 disabled:cursor-not-allowed p-2"
      >
        Mentés
      </button>
    </form>
  );
}

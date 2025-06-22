"use client";
import DeleteTodo from "./DeleteTodo";
import EditTodoBtn from "./EditTodo";
import { useState } from "react";

type TodoItemProps = {
  todo: string;
  id: string;
};

export default function TodoItem({ todo, id }: TodoItemProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className="flex justify-between items-center p-4 bg-zinc-700 rounded border border-zinc-200 w-full">
      <li className="text-xl text-zinc-200 list-none uppercase">{todo}</li>
      <div className="flex gap-2">
        <EditTodoBtn id={id} disabled={isSubmitting} setIsSubmitting={setIsSubmitting} />
        <DeleteTodo id={id} disabled={isSubmitting} setIsSubmitting={setIsSubmitting} />
      </div>
    </div>
  );
}

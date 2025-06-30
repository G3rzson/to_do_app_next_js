"use client";
import { createTodo } from "@/Functions/createTodo";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useTransition } from "react";
import { todoSchema } from "@/validation/todoSchema";

type FormData = z.infer<typeof todoSchema>;

export default function NewTodoForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(todoSchema),
  });

  const onSubmit = async (data: FormData) => {
    const formData = new FormData();
    formData.append("todo", data.todo);

    const result = await createTodo(formData);

    if (result?.error) {
      setError("todo", {
        type: "server",
        message: result.error,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 my-8">
      <label className="text-2xl text-center mb-8">Feladat hozzáadása</label>
      <input
        {...register("todo")}
        type="text"
        placeholder="Írd be a feladatot"
        className="outline-none border bg-transparent focus:bg-transparent border-zinc-200 rounded p-2"
      />
      {errors.todo && (
        <span className="text-red-400 text-sm">
          {errors.todo.message}
        </span>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded cursor-pointer bg-green-800 hover:bg-green-700 disabled:bg-zinc-500 disabled:cursor-not-allowed p-2"
      >
        Hozzáadás
      </button>
    </form>
  );
}

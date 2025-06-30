"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { editTodo } from "@/Functions/editTodo";
import { editTodoSchema } from "@/validation/editTodoSchema";

type FormData = z.infer<typeof editTodoSchema>;

type EditTodoFormProps = {
  todo: { id: string; todo: string };
};

export default function EditTodoForm({ todo }: EditTodoFormProps) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(editTodoSchema),
    defaultValues: {
      id: todo.id,
      todo: todo.todo,
    },
  });

  async function onSubmit(data: FormData) {
    const formData = new FormData();
    formData.append("id", data.id);
    formData.append("todo", data.todo);

    const result = await editTodo(formData);

    if (result?.error) {
      setError("todo", {
        type: "server",
        message: result.error,
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 my-8"
    >
      <label className="text-2xl text-center mb-8">Feladat szerkesztése</label>

      <input type="hidden" {...register("id")} />

      <input
        {...register("todo")}
        type="text"
        placeholder="Írd be a feladatot"
        className="outline-none border bg-transparent focus:bg-transparent border-zinc-200 rounded p-2"
      />
      {errors.todo && (
        <span className="text-red-400 text-sm">{errors.todo.message}</span>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded cursor-pointer bg-green-800 hover:bg-green-700 disabled:bg-zinc-500 disabled:cursor-not-allowed p-2"
      >
        Mentés
      </button>
    </form>
  );
}

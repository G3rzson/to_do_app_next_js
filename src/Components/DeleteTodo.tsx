"use client";
import { FaTrash } from "react-icons/fa";

type DeleteTodoProps = {
  id: string;
  disabled: boolean;
  setIsSubmitting: (val: boolean) => void;
};

export default function DeleteTodo({ id, disabled, setIsSubmitting }: DeleteTodoProps) {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    setIsSubmitting(true);
  }

  return (
    <form
      action={`/delete/${id}`}
      method="post"
      onSubmit={handleSubmit}
    >
      <button
        type="submit"
        disabled={disabled}
        className="rounded cursor-pointer bg-red-800 hover:bg-red-700 p-2 disabled:bg-zinc-500 disabled:cursor-not-allowed"
      >
        <FaTrash size={16} />
      </button>
    </form>
  );
}

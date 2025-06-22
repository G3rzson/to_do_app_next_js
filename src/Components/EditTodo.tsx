"use client";

import { useRouter } from "next/navigation";
import { MdStickyNote2 } from "react-icons/md";

type EditTodoProps = {
  id: string;
  disabled: boolean;
  setIsSubmitting: (val: boolean) => void;
};

export default function EditTodo({ id, disabled, setIsSubmitting }: EditTodoProps) {
  const router = useRouter();

  const handleClick = () => {
    setIsSubmitting(true); 
    router.push(`/edit/${id}`);
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className="rounded cursor-pointer bg-blue-800 hover:bg-blue-700 p-2 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <MdStickyNote2 size={16} />
    </button>
  );
}

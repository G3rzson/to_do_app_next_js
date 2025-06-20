"use client";

import { useRouter } from "next/navigation";
import { MdStickyNote2 } from "react-icons/md";

type EditTodoProps = {
  id: string;
};

export default function EditTodo({ id }: EditTodoProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/edit/${id}`);
  };

  return (
    <button
      onClick={handleClick}
      className="rounded cursor-pointer bg-blue-800 hover:bg-blue-700 p-2"
    >
      <MdStickyNote2 size={16} />
    </button>
  );
}

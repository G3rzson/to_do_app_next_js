"use client"

import { FaTrash } from "react-icons/fa";

type DeleteTodoProps = {
  id: string; 
  deleteTodo: (id: string) => void;
};

export default function DeleteTodo({ id, deleteTodo }: DeleteTodoProps) {
  return (
    <button onClick={()=> deleteTodo(id)} className="rounded cursor-pointer bg-red-800 hover:bg-red-700 p-2">
      <FaTrash size={16} />
    </button>
  );
}

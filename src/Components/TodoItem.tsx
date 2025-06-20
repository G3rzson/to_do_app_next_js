import { deleteTodo } from "@/Functions/deleteTodo";
import DeleteTodo from "./DeleteTodo";
import EditTodo from "./EditTodo";

type TodoItemProps = {
  todo: string;
  id: string;
};

export default function TodoItem({ todo, id }: TodoItemProps) {
  return (
    <div className="flex justify-between items-center p-2 bg-zinc-700 rounded border border-zinc-200">
      <li className="text-xl text-zinc-200 list-none uppercase">{todo}</li>
      <div className="flex gap-2">
        <EditTodo id={id} />
        <DeleteTodo id={id} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}

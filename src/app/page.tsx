import TodoItem from "@/Components/TodoItem";
import { getTodos } from "@/Functions/getTodos";

export default async function Home() {
  const todos = await getTodos();

  return (
    <div>
      <h1 className="text-center my-8 text-3xl">Todo App. Next Js</h1>
      {todos && todos.length > 0 ? (
        <ul className="flex flex-col gap-2 w-[80%] mx-auto">
          {todos.map((todo) => (
            <TodoItem key={todo.id} id={todo.id} todo={todo.todo} />
          ))}
        </ul>
      ) : (
        <div className="text-center text-xl text-zinc-200 my-40">
          Nincsenek feladatok.😁
        </div>
      )}
    </div>
  );
}

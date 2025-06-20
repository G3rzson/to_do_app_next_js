import { editTodo } from "@/Functions/editTodo";
import { getTodoById } from "@/Functions/getTodoById";

type EditPageProps = {
  params: { id: string };
};

export default async function EditPage({ params }: EditPageProps) {
  const todo = await getTodoById(params.id);

  if (!todo) {
    return <div className="text-red-500">A feladat nem található.</div>;
  }

  return (
    <form action={editTodo} className="flex flex-col gap-2 p-4 my-8">
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
        className="rounded cursor-pointer bg-green-800 hover:bg-green-700 p-2"
      >
        Mentés
      </button>
    </form>
  );
}

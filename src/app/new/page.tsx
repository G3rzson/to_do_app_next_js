import { createTodo } from "@/Functions/createTodo";

export default function New() {

  return (
    <form action={createTodo} className="flex flex-col gap-2 p-4 my-8">
      <label className="text-2xl text-center mb-8">Feladat hozzáadása</label>
      <input type="text" name="todo" className="outline-none border bg-transparent border-zinc-200 rounded p-2"/>
      <button type="submit" className="rounded cursor-pointer bg-green-800 hover:bg-green-700 p-2">Hozzáadás</button>
    </form>
  )
}

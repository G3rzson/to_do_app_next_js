import EditTodoForm from "@/Components/EditTodoForm";
import { getTodoById } from "@/Functions/getTodoById";

type EditPageProps = {
  params: Promise<{ id: string }>;
};

export default async function EditPage({ params }: EditPageProps) {
  const { id } = await params;

  const todo = await getTodoById(id);

  if (!todo) {
    return <div className="text-red-500 text-center my-4 text-2xl">A feladat nem található.</div>;
  }

  return <EditTodoForm todo={todo} />;
}

import { HTMLAttributes, useState } from "react";
import { PlusCircle } from "phosphor-react";

interface TodoListProps extends HTMLAttributes<HTMLFormElement> {
  onCreateNewTodo: (text: string) => void;
}

export function TodoForm({ onCreateNewTodo }: TodoListProps) {
  const [text, setText] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    onCreateNewTodo(text);

    setText("");
  }

  return (
    <form className="w-full h-14 flex gap-2" onSubmit={handleSubmit}>
      <input
        className="flex-1 h-full px-4 text-gray-100 bg-gray-500 border border-gray-700 rounded-lg placeholder:text-gray-300 focus:border-purple-700 active:border-purple-700"
        placeholder="Adicione uma nova tarefa"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="h-full px-4 flex items-center gap-2 text-gray-100 bg-blue-700 rounded-lg font-bold hover:bg-blue-500">
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  );
}

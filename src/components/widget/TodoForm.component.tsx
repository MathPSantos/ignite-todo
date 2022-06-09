import {
  ChangeEvent,
  FormEvent,
  HTMLAttributes,
  InvalidEvent,
  useState,
} from "react";
import { PlusCircle } from "phosphor-react";

interface TodoListProps extends HTMLAttributes<HTMLFormElement> {
  onCreateNewTodo: (text: string) => void;
}

export function TodoForm({ onCreateNewTodo }: TodoListProps) {
  const [text, setText] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    onCreateNewTodo(text);

    setText("");
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    e.target.setCustomValidity("");

    setText(e.target.value);
  }

  function handleInvalid(e: InvalidEvent<HTMLInputElement>) {
    e.target.setCustomValidity("Adicione um texto ao campo");
  }

  return (
    <form className="w-full h-14 flex gap-2" onSubmit={handleSubmit}>
      <input
        className="flex-1 h-full px-4 text-gray-100 bg-gray-500 border border-gray-700 rounded-lg placeholder:text-gray-300 focus:border-purple-700 active:border-purple-700"
        placeholder="Adicione uma nova tarefa"
        type="text"
        value={text}
        onChange={handleChange}
        onInvalid={handleInvalid}
        required
      />
      <button className="h-full px-4 flex items-center gap-2 text-gray-100 bg-blue-700 rounded-lg font-bold hover:bg-blue-500">
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  );
}

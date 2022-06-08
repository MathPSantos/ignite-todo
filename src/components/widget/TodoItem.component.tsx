import { Trash } from "phosphor-react";
import { Todo } from "../../core/types/Todo.types";
import { classNames } from "../../core/utils/classname.util";

interface TodoItemProps {
  todo: Todo;
  onToogle: (id: string) => void;
  onRemove: (id: string) => void;
}

export function TodoItem({ todo, onToogle, onRemove }: TodoItemProps) {
  const textClassName = classNames(
    "flex-1 text-sm leading-[1.4]",
    todo.isCompleted && "line-through text-gray-300"
  );

  function handleCheckbox() {
    onToogle(todo.id);
  }

  function handleRemove() {
    onRemove(todo.id);
  }

  return (
    <div className="flex items-start gap-3 w-full bg-gray-500 border border-gray-400 p-4 rounded-lg">
      <input
        className="appearance-none w-5 h-5 rounded-full border border-blue-500 bg-gray-500 checked:bg-purple-500 focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
        type="checkbox"
        onClick={handleCheckbox}
      />

      <p className={textClassName}>{todo.text}</p>

      <button
        className="flex items-center justify-center w-6 h-6 bg-transparent rounded-sm text-gray-300"
        onClick={handleRemove}
        title="Remover tarefa"
      >
        <Trash size={16} />
      </button>
    </div>
  );
}

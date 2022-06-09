import { HTMLAttributes } from "react";

import Clipboard from "../../assets/clipboard.png";

import { Todo } from "../../core/types/Todo.types";

import { classNames } from "../../core/utils/classname.util";
import { TodoItem } from "./TodoItem.component";

interface TodoListProps extends HTMLAttributes<HTMLDivElement> {
  todos: Todo[];
  onToggleTodo: (id: string) => void;
  onRemoveTodo: (id: string) => void;
}

export function TodoList({
  todos,
  onToggleTodo,
  onRemoveTodo,
  className,
  ...props
}: TodoListProps) {
  const compClassName = classNames(
    "rounded-lg",
    className,
    !todos.length && "border-t border-t-gray-400"
  );

  return (
    <div className={compClassName} {...props}>
      {!todos.length ? (
        <div className="mt-16 flex flex-col items-center text-gray-300">
          <img src={Clipboard} />
          <strong className="mt-4">
            Você ainda não tem tarefas cadastradas
          </strong>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-3 pb-6">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToogle={onToggleTodo}
              onRemove={onRemoveTodo}
            />
          ))}
        </div>
      )}
    </div>
  );
}

import { useState } from "react";

import { Indicator } from "./components/common/data-display";
import { Header } from "./components/layout";
import { TodoForm } from "./components/widget";
import { TodoList } from "./components/widget/TodoList.component";
import { uuidV4 } from "./core/shared/uuid.shared";

import { Todo } from "./core/types/Todo.types";

export function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(text: string) {
    const newTodo: Todo = {
      id: uuidV4(),
      text,
      isCompleted: false,
    };

    setTodos((prev) => [...prev, newTodo]);
  }

  function toggleTodoComplete(id: string) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  }

  function removeTodo(id: string) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <Header />
      <main className="px-4">
        <div className="mx-auto max-w-3xl -mt-7">
          <TodoForm onCreateNewTodo={addTodo} />

          <div className="mt-16">
            <div className="flex items-center justify-between">
              <Indicator value={0} content="Tarefas criadas" />
              <Indicator value={0} content="Concluídas" colorScheme="purple" />
            </div>

            <TodoList
              todos={todos}
              onToggleTodo={toggleTodoComplete}
              onRemoveTodo={removeTodo}
              className="mt-6"
            />
          </div>
        </div>
      </main>
    </>
  );
}

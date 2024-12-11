import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { Todo } from "./types/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const id = Math.random().toString();
    setTodos([...todos, { id, text }]);
  };

  const removeTodoHandler = (todoId: string) => {
    const updatedTodos = todos.filter((todo: Todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };
  return (
    <main className="flex flex-col items-center w-full justify-center pt-6">
      <AddTodo onAddTodo={addTodoHandler} />
      <TodoList items={todos} onRemoveTodo={removeTodoHandler} />
    </main>
  );
}

export default App;

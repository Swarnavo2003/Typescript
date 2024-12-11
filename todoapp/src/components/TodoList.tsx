import React from "react";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";

type TodoListProps = {
  items: { id: string; text: string }[];
  onRemoveTodo: (id: string) => void;
};

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <div className="my-5 flex flex-col gap-3">
      {props.items.map((todo) => (
        <Card key={todo.id}>
          <CardHeader className="flex flex-row items-center justify-between gap-4 ">
            <CardTitle>{todo.text}</CardTitle>
            <Button
              variant="outline"
              onClick={() => props.onRemoveTodo(todo.id)}
            >
              <Trash2 />
              Delete
            </Button>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default TodoList;

import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

type AddTodoProps = {
  onAddTodo: (todoText: string) => void;
};

const AddTodo = ({ onAddTodo }: AddTodoProps) => {
  const [text, setText] = useState<string>("");

  const changeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    onAddTodo(text);
    setText("");
  };
  return (
    <form className="flex items-center gap-2" onSubmit={submitHandler}>
      <Input
        onChange={changeEventHandler}
        type="text"
        value={text}
        placeholder="Write a new todo"
        className="w-fit"
      />
      <Button type="submit">Add Todo</Button>
    </form>
  );
};

export default AddTodo;

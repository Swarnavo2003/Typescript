import { Request, Response } from "express";
import { Todo } from "../models/todo";
import { text } from "body-parser";

const TODO: Todo[] = [];
export const createTodo = (req: Request, res: Response) => {
  try {
    // const text = (req.body as { text: string }).text;
    const text = (<{ text: string }>req.body).text;

    const newTodo = new Todo(Math.random().toString(), text);

    TODO.push(newTodo);

    res.status(201).json({
      message: "Todo created successfully",
      newTod: newTodo,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const getTodo = (req: Request, res: Response) => {
  try {
    res.status(200).json(TODO);
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const updateTodo = (req: Request, res: Response) => {
  try {
    const todoId = req.params.todoId;
    const text = (req.body as { text: string }).text;

    const todoIndex = TODO.findIndex((todo) => todo.id === todoId);

    if (todoIndex < 0) {
      throw new Error("Todo not found");
    }

    // update Todo
    TODO[todoIndex] = new Todo(TODO[todoIndex].id, text);

    res.status(200).json({
      message: "Todo updated",
      newTodo: TODO[todoIndex],
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const deleteTodo = (req: Request, res: Response) => {
  const todoId = req.params.todoId;
  const todoIndex = TODO.findIndex((todo) => todo.id === todoId);

  if (todoIndex < 0) {
    throw new Error("Todo not found");
  }

  TODO.splice(todoIndex, 1);
  res.status(200).json({
    message: "Todo deleted",
  });
};

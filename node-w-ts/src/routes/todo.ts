import express from "express";
import {
  createTodo,
  deleteTodo,
  getTodo,
  updateTodo,
} from "../controllers/todo";

const router = express.Router();

router.route("/").post(createTodo);
router.route("/").get(getTodo);
router.route("/:todoId").patch(updateTodo);
router.route("/:todoInd").delete(deleteTodo);

export default router;

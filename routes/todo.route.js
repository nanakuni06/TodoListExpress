const express = require("express");
const {
  getAllTodo,
  getTodoById,
  updateTodoById,
  deleteTodoById,
  deleteAllTodo,
  createTodo,
} = require("../controllers/todo.controller");
const verifyToken = require("../middlewares/auth.middleware");
const route = express.Router();

route.post("/", verifyToken, createTodo);
route.get("/", verifyToken, getAllTodo);
route.get("/:id", verifyToken, getTodoById);
route.put("/:id", verifyToken, updateTodoById);
route.delete("/:id", verifyToken, deleteTodoById);
route.delete("/", verifyToken, deleteAllTodo);

module.exports = route;

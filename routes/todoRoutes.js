const express = require("express");
const todoController = require("./../controllers/todoController");

const router = express.Router();

router
  .route("/")
  .get(todoController.getAllTodo)
  .post(todoController.createTodo);

router
  .route("/:id")
  .put(todoController.editTodo)
  .delete(todoController.deleteTodo);

module.exports = router;

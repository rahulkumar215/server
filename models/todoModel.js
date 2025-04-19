const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A task must have a name"],
  },
  description: String,
  targetDate: Date,
  completed: {
    type: String,
    enum: {
      values: ["completed", "not completed"],
    },
    default: "not completed",
  },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;

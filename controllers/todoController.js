const Todo = require("./../models/todoModel");

exports.createTodo = async (req, res, next) => {
  try {
    const todo = await Todo.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        data: todo,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "There was a problem while creating a todo.",
    });
  }
};

exports.getAllTodo = async (req, res, next) => {
  try {
    const allTodo = await Todo.find();

    res.status(200).json({
      status: "success",
      data: {
        data: allTodo,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "There was a problem while getting all todo.",
    });
  }
};

exports.editTodo = async (req, res, next) => {
  try {
    const id = req.body._id;
    const todo = await Todo.findOneAndUpdate({ _id: id }, req.body, {
      new: true, // return the updated document
      runValidators: true, // ensure schema validations run
    });

    todo.save();

    res.status(200).json({
      status: "successs",
      data: {
        data: todo,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "fail",
      message: "There was a problem while edit  todo.",
    });
  }
};

exports.deleteTodo = async (req, res, next) => {
  try {
    await Todo.findOneAndDelete({ _id: req.params.id });

    res.status(200).json({
      status: "successs",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "fail",
      message: "There was a problem while edit  todo.",
    });
  }
};

const express = require("express");
const path = require("path");
const todoRouter = require("./routes/todoRoutes");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/todo", todoRouter);

module.exports = app;

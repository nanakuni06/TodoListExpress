const express = require("express");
const route = express.Router();
const authRoute = require("./auth.route");
const todoRoute = require("../routes/todo.route");
const userRoute = require('../routes/user.route');

route.get("/", (req, res) => {
  res.send("Welcome to todolist app");
});

route.use("/auth", authRoute);
route.use("/todos", todoRoute);
route.use("/users", userRoute);

module.exports = route;

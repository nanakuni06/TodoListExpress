const express = require("express");
const { getAlluser, getUserById } = require("../controllers/user.controller");

const route = express.Router();

route.get("/", getAlluser),
  route.get("/:id", getUserById),
  route.get("/"),
  (module.exports = route);

const express = require("express");
const { getAlluser } = require("../controllers/user.controller");

const route = express.Router();

route.get("/", getAlluser),
  route.get("/"),
  route.get("/"),
  
  (module.exports = route);
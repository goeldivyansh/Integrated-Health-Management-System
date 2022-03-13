// new
const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  User = require("./models/users")









app.listen(process.env.PORT || 3000, process.env.IP, function () {
    console.log("Server Has Started!");
});
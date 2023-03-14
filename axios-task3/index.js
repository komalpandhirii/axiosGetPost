const express = require("express");
const con = require("./connection");
const userRouter = require("./router/user.router");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const axios = require('axios');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRouter);

const port = 9500;

app.listen(port, () => {
  console.log("server running on PORT " + port);
});

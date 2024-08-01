// ***import express and mongoose with require
import express from "express";
import mongoose from "mongoose";
import User from "./models/user.js";
import userRouter from "./routes/User.js";

import isAuthenticated from "./midlewares/isAuthenticated.js";
import foodRouter from "./routes/food.js";

//1 create server
const server = express();
//3 use express.json to handle objects
server.use(express.json());

//mmiddleware

server.use(isAuthenticated);

server.use("/User", userRouter);
server.use("/food", isAuthenticated, foodRouter);
server.get("/secret", function (req, res) {
  const token = req.body.token;
  try {
    const data = jwt.verify(token, "jwtsecret");
    console.log(data);
    res.send({
      message: "this is a secret message",
    });
  } catch (error) {
    res.send({
      message: "you are not authorized",
    });
  }
});

//database connection
mongoose
  .connect(
    "mongodb+srv://eren_yeager_1453:islamicworld1453@cluster0.lhb5c.mongodb.net/code213-younes?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(function () {
    "Database connected";
  });

// - run server
server.listen(8000, function () {
  console.log("Server is running at PORT 8000");
});

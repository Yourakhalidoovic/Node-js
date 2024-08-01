import express from "express";
import {
  createUser,
  getUsers,
  getUserById,
  login,
  updateUser,
  deleteAllUsers,
  deleteUser,
} from "../controllers/User.js";

const userRouter = express.Router();

userRouter.post("/", createUser);
userRouter.get("/", getUsers);
userRouter.get("/:id", getUserById);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);
userRouter.delete("/", deleteAllUsers);
userRouter.post("/login",login );

export default userRouter;
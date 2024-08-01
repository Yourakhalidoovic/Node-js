import express from "express";
import {
  createFood,
  getAllFoods,
  getFoodById,
  updateFoodById,
  deleteFoodById,
  deleteAllFoods,
  updateFoodById2,
} from "../controllers/food.js";

const foodRouter = express.Router();

foodRouter.get("/", getAllFoods);
foodRouter.get("/:id", getFoodById);
foodRouter.post("/", createFood);
foodRouter.put("/:id", updateFoodById);
foodRouter.put("/:id", updateFoodById2);
foodRouter.delete("/:id", deleteFoodById);
foodRouter.delete("/", deleteAllFoods);

export default foodRouter;

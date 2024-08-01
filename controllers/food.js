import Food from "../models/food.js";

export const createFood = async (req, res) => {
  try {
    const foodInfo = req.body;
    const createdFood = await Food.create(foodInfo);
    //after insertion
    res.send({
      message: "food CREATED with success",
      newFood: createdFood,
    });
  } catch (error) {
    res.send(`Error : ${error}`);
  }
};

export const getAllFoods = async (req, res) => {
  const foods = await Food.find({ userId: req.userId });
  res.send({ userId: req.userId, foods: foods });
};

export const getFoodById = async (req, res) => {
  const id = req.params.id;
  try {
    const foods = await Food.findById(id);
    res.send(foods);
  } catch (error) {
    res.send({
      message: "Food not found",
      error: error.message,
    });
  }
};

export const updateFoodById = async (req, res) => {
  const id = req.params.id;
  const updatedFood = await Food.findByIdAndUpdate(id, req.body);
  res.send({ food: updatedFood });
};

export const updateFoodById2 = async (req, res) => {
  const id = req.params.id;
  try {
    const foods = await Food.findByIdAndUpdate(id);
    res.send(foods);
  } catch (error) {
    res.send({
      message: "Food not found",
      error: error.message,
    });
  }
};

export const deleteFoodById = async (req, res) => {
  const id = req.params.id;
  const deletedFood = await Food.findByIdAndDelete(id);
  res.send({ food: deletedFood });
};

export const deleteAllFoods = async (req, res) => {
  await Food.deleteMany();
  res.send({ food: updatedFood });
};
export const deleteAllFoods = async (req, res) => {
  await Food.deleteMany({ userId: req.userId });
  res.send({ message: "Deleted with success" });
};

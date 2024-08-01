import mongoose from "mongoose";

// Create food model
const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  ingredients: [{ type: String }],
});

const Food = mongoose.model("Food", foodSchema);

export default Food;
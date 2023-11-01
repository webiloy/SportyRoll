const mongoose = require("mongoose");
const ExerciseSchema = require("./Exercise"); // Update the casing to match the file name
const workoutSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  categories: {
    type: [String],
    default: [],
  },
  difficulty: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  authorid: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  status: {
    type: String,
    enum: ["private", "public"],
    required: true,
  },
  Exercises: {
    type: [ExerciseSchema],
    default: [],
  },
});

module.exports = mongoose.model("Workout", workoutSchema);

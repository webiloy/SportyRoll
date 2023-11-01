const mongoose = require("mongoose");
const workoutSchema = require("./Workout");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  workouts: {
    type: [workoutSchema],
    default: [],
  },
});

module.exports = mongoose.model("User", userSchema);

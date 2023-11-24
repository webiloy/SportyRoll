const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  access: { type: Boolean, default: false },
  workouts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Workout" }],
});

module.exports = mongoose.model("User", userSchema);

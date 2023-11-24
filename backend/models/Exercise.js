const mongoose = require("mongoose");
const exerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, default: "" },
  muscles: { type: Object, required: true },
  category: { type: Array, required: true },
  difficulty: { type: Number, required: true },
  type: { type: String, required: true },
});
module.exports = mongoose.model("Exercise", exerciseSchema);

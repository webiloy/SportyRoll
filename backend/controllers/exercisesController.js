const asyncHandler = require("express-async-handler");
const Exercise = require("../models/Exercise");

const getAllExercise = asyncHandler(async (req, res) => {
  //   const ExerciseObject = {
  //     name: "pull up",
  //     description: "just pull you up",
  //     weight: "2",
  //     sets: "2",
  //     reps: "3",
  //     type: "black",
  //   };
  //   const exercise = await Exercise.create(ExerciseObject);
  //   if (!exercise) return res.status(400).json({ message: "Cant Create" });
  const exercises = await Exercise.find().exec();
  console.log(exercises);
  if (!exercises)
    return res.status(400).json({ message: "No exercises Found" });
  else res.json({ exercises: exercises });
});

module.exports = {
  getAllExercise,
};

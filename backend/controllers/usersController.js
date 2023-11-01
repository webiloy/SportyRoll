const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Workout = require("../models/Workout");
// @desc Get all users
//  @route GET /users
// @accsess Private
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select("-password");
  if (!users) return res.status(400).json({ message: "No Users Found" });
  else res.json({ users: users });
});

// @desc Create new user
// @route POST /users
// @accsess Private
const createNewUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  // Confirm data
  if (!username || !email || !password)
    return res.status(400).json({ message: "All Fields are required" });
  // Chekc for duplicates
  const duplicate = await User.findOne({ username }).lean().exec();
  if (duplicate) return res.status(409).json({ message: "Username Taken" });
  // Hash password
  const hasedPassword = await bcrypt.hash(password, 10);
  const userObject = { username, email, password: hasedPassword };
  // Create and Store User
  const user = await User.create(userObject);
  if (user) res.status(201).json({ message: `New user ${username} created` });
  else res.status(400).json({ message: "Invalid user data received" });
});

// @desc Update user
// @route Patch /users
// @accsess Private
const updateUser = asyncHandler(async (req, res) => {
  const { id, username, email, password, accsess, workouts } = req.body;
  if (
    !id ||
    !username ||
    !email ||
    !password ||
    !accsess ||
    !Array.isArray(workouts) ||
    workouts.length
  )
    return res.status(400).json({ message: "All fields are required" });
  const user = await User.findById(id).exec();
  if (!user) return res.status(400).json({ message: "User not found" });
  const duplicate = await User.find({ username }).lean().exec();
  if (duplicate && duplicate?._id.toString() !== id)
    return res.status(409).json({ message: "Duplicate Username" });
  user.username = username;
  user.email = email;
  user.workouts = workouts;
  user.accsess = accsess;
  if (password) user.password = await bcrypt.hash(password, 10);
  const updatedUser = await user.save();
  res.json({ message: `${updatedUser.username} updated` });
});

// @desc delete user
// @route Patch /users
// @accsess Private
const deleteUser = asyncHandler(async (req, res) => {});

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};

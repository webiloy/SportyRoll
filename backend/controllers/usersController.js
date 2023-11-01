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
});

// @desc Update user
// @route Patch /users
// @accsess Private
const updateUser = asyncHandler(async (req, res) => {});

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

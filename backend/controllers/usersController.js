const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
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
  const { username, email, password, accsess, giveCookie } = req.body;
  console.log(username);
  // Confirm data
  if (!username || !email || !password)
    return res.status(400).json({ message: "All Fields are required" });
  // Chekc for duplicates
  const duplicate = await User.findOne({ username }).lean().exec();
  if (duplicate) return res.status(409).json({ message: "Username Taken" });
  const emailduplicate = await User.findOne({ email }).lean().exec();
  if (emailduplicate) return res.status(409).json({ message: "Email Taken" });
  // Hash password
  const hasedPassword = await bcrypt.hash(password, 10);
  const userObject = { username, email, password: hasedPassword, accsess };
  // Create and Store User
  const user = await User.create(userObject);
  if (user && giveCookie) {
    const accsessToken = jwt.sign(
      {
        UserInfo: {
          _id: user._id,
          username: user.username,
          access: user.access,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1h" }
    );
    const refreshToken = jwt.sign(
      { username: user.username },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "7d" }
    );
    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: "none",
      maxAge: 30 * 24 * 60 * 1000, // 30 days
    });
    return res.status(202).json({ accsessToken });
  } else if (user)
    return res.status(202).json({ message: `User ${user.username} Created!` });
  else return res.status(400).json({ message: "Invalid user data received" });
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
    accsess === null ||
    !Array.isArray(workouts) ||
    workouts?.length === null
  )
    return res.status(400).json({ message: "All fields are required" });
  const user = await User.findById(id).exec();
  if (!user) return res.status(400).json({ message: "User not found" });
  const duplicate = await User.find({ username }).lean().exec();
  if (duplicate && duplicate[0]?._id.toString() !== id)
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
const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.body;
  if (!id) return res.status(400).json({ message: "id is required" });
  const user = await User.findById(id).exec();
  if (!user) return res.status(400).json({ message: "user not found" });
  const result = await user.deleteOne();
  res.json({
    message: `The username : ${user.username} with the ID : ${user._id} was deleted`,
  });
});

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};

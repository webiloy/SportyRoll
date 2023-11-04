const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

// @desc Login
// @route POST /auth
// @accsess Public
const login = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    res.status(400).json({ message: "All fields are required" });
  const foundUser = await User.findOne({ username }).exec();
  if (!foundUser) return res.status(401).json({ message: "Unauthorized" });
  const match = await bcrypt.compare(password, foundUser.password);
  if (!match) return res.status(401).json({ message: "Unauthorized" });
  const accsessToken = jwt.sign(
    {
      UserInfo: {
        username: foundUser.username,
        accsess: foundUser.accsess,
      },
    },
    process.env.ACCSESS_TOKEN_SECRET,
    { expiresIn: "60s" }
  );
});

// @desc Refresh
// @route POST /auth/refresh
// @accsess Public accsess webtoken expierd
const refresh = asyncHandler(async (req, res) => {});

// @desc Logout
// @route POST /auth/logout
// @accsess Public - clears cookie if exists
const logout = asyncHandler(async (req, res) => {});

module.exports = { login, refresh, logout };

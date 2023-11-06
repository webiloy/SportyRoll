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
        access: foundUser.access,
      },
    },
    process.env.ACCSESS_TOKEN_SECRET,
    { expiresIn: "1m" }
  );
  const refreshToken = jwt.sign(
    { username: foundUser.username },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "1d" }
  );
  res.cookie("jwt", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 7 * 24 * 60 * 1000, // 7 days
  });
  res.json({ accsessToken });
});

// @desc Refresh
// @route POST /auth/refresh
// @accsess Public accsess webtoken expierd
const refresh = asyncHandler(async (req, res) => {
  const cookies = req.cookies;
  if (!cookies.jwt) return res.status(401).json({ message: "Unauthorized" });
  const refreshToken = cookies.jwt;
  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    asyncHandler(async (err, decoded) => {
      if (err) return res.status(403).json({ message: "Forbidden" });
      const foundUser = await User.findOne({ username: decoded.username });
      if (!foundUser) return res.status(401).json({ message: "Unauthorized" });
      const accsessToken = jwt.sign(
        {
          UserInfo: { username: foundUser.username, accsess: foundUser.access },
        },
        process.env.ACCSESS_TOKEN_SECRET,
        { expiresIn: "1m" }
      );
      res.json({ accsessToken });
    })
  );
});

// @desc Logout
// @route POST /auth/logout
// @accsess Public - clears cookie if exists
const logout = asyncHandler(async (req, res) => {
  const cookies = req.cookies;
  if (!cookies.jwt) return res.sendStatus(204);
  res.clearCookie("jwt", { httpOnly: true, sameSite: "none", secure: true });
  res.json({ message: "Cookie cleared" });
});

module.exports = { login, refresh, logout };

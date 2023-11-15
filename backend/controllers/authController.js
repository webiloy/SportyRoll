const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const authHelpers = require("../utils/auth/authHelpers");
// @desc Login
// @route POST /auth
// @accsess Public
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  // Normal Login
  if (!email || !password)
    res.status(400).json({ message: "All fields are required" });
  const foundUser = await User.findOne({ email }).exec();
  if (!foundUser) return res.status(401).json({ message: "Unauthorized" });
  const match = await bcrypt.compare(password, foundUser.password);
  if (!match) return res.status(401).json({ message: "Unauthorized" });
  const accsessToken = authHelpers.generateTokensAndSetCookie(res, foundUser);
  return res.status(202).json({ accsessToken });
});
// @desc Google Login
// @route POST /auth/google
const GoogleLogin = asyncHandler(async (req, res) => {
  const { access_token } = req.body;
  // Google Login
  if (access_token) {
    const response = await fetch(
      "https://www.googleapis.com/oauth2/v3/userinfo",
      { headers: { Authorization: `Bearer ${access_token}` } }
    );
    if (!response.ok)
      return res.status(response.status).json({ error: "Google Api Error" });
    const userData = await response.json();
    let foundUser = await User.findOne({ email: userData.email }).exec();
    if (!foundUser) {
      let username = await authHelpers.getValidUsername(userData.name);
      const hasedPassword = await bcrypt.hash(process.env.SOCIAL_PASSWORD, 10);
      const userObject = {
        username,
        email: userData.email,
        password: hasedPassword,
      };
      foundUser = await User.create(userObject);
      if (!foundUser)
        res.status(400).json({ message: "Invalid user data received" });
    }
    const accessToken = authHelpers.generateTokensAndSetCookie(res, foundUser);
    res.status(202).json({ accessToken });
  }
});
const FacebookLogin = asyncHandler(async (req, res) => {
  const { data } = req.body;
  if (!data || !data?.name || !data?.id || !data?.email)
    return res.status(400).json({ message: "Facebook user data is required" });
  let foundUser = await User.findOne({ email: data.email }).exec();
  if (!foundUser) {
    let username = await authHelpers.getValidUsername(data.name, data.email);
    const hasedPassword = await bcrypt.hash(data.id, 10);
    const userObject = {
      username,
      email: data.email,
      password: hasedPassword,
    };
    foundUser = await User.create(userObject);
    if (!foundUser)
      res.status(400).json({ message: "Invalid user data received" });
  }
  const accessToken = authHelpers.generateTokensAndSetCookie(res, foundUser);
  return res.status(202).json({ accessToken });
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
          UserInfo: {
            _id: foundUser._id,
            username: foundUser.username,
            email: foundUser.email,
            accsess: foundUser.access,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "1h" }
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
  res.status(202).json({ message: "Cookie cleared" });
});

module.exports = { login, GoogleLogin, FacebookLogin, refresh, logout };

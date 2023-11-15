// utils/authHelpers.js

const jwt = require("jsonwebtoken");
const User = require("../../models/User");
function generateTokensAndSetCookie(res, user) {
  const accessToken = jwt.sign(
    {
      UserInfo: {
        _id: user._id,
        email: user.email,
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

  return accessToken;
}
const getValidUsername = async (username, email) => {
  let name = username;
  if (email && !/^[a-zA-Z]+$/.test(name)) {
    var atIndex = email.indexOf("@");
    name = email.substring(0, atIndex);
  }
  let count = 1;
  let duplicate = await User.findOne({ username }).lean().exec();
  while (duplicate) {
    name = name + `${count}`;
    duplicate = await User.findOne({ name }).lean().exec();
    count++;
  }
  return name;
};
module.exports = { generateTokensAndSetCookie, getValidUsername };

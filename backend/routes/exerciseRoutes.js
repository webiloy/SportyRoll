const express = require("express");
const exercisesController = require("../controllers/exercisesController");
const router = express.Router();
const verifyJWT = require("../middleware/verifyJWT");
// Form Auth
router.route("/").get(exercisesController.getAllExercise);
// Google Auth
// router.route("/google").post(loginLimiter, authController.GoogleLogin);
// Facebook Auth
// router.route("/facebook").post(loginLimiter, authController.FacebookLogin);
// // Refresh Access Token
// router.route("/refresh").get(authController.refresh);
// // Logout Cookies
// router.route("/logout").post(authController.logout);

module.exports = router;

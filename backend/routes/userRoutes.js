const express = require("express");
const usersController = require("../controllers/usersController");
const router = express.Router();
const verifyJWT = require("../middleware/verifyJWT");

router
  .route("/")
  .get(verifyJWT, usersController.getAllUsers)
  .post(usersController.createNewUser)
  .patch(verifyJWT, usersController.updateUser)
  .delete(verifyJWT, usersController.deleteUser);

module.exports = router;

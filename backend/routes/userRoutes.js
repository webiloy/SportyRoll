const express = require("express");
const usersController = require("../controllers/usersController");
const router = express.Router();
const verifyJWT = require("../middleware/verifyJWT");
router.use(verifyJWT);
// Define the path using router.route(path) and chain the HTTP methods to it.
router
  .route("/")
  .get(usersController.getAllUsers)
  .post(usersController.createNewUser)
  .patch(usersController.updateUser)
  .delete(usersController.deleteUser);

module.exports = router;

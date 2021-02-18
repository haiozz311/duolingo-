const express = require("express");
const { uploadImages } = require("../middleware/img/index");
const {
  AddUser,
  createUser,
  deleteUser,
  getAccountInfor,
  getMe,
  getUser,
  login,
  paginationUser,
  searchUser,
  updatePassword,
  updateUser,
  uploadAvater,
} = require("../services/User.service");
const {
  validateCreateUser,
} = require("../middleware/validation/user/create-user.validate");
const {
  validateChangePassword,
} = require("../middleware/validation/user/changePassword.validate");

const {
  validateGetUser,
} = require("../middleware/validation/user/get-user.validate");
const {
  validateAddUser,
} = require("../middleware/validation/user/add-user.validate");

const {
  validateUpdateUser,
} = require("../middleware/validation/user/update-user.validate");
const { authenticate, authorization } = require("../middleware/auth/index");
const router = express.Router();

router.get(
  "/user",
  authenticate,
  authorization(["602b1b874b9eab3104d7d154"]),
  searchUser
);
router.get(
  "/me",
  authenticate,
  authorization(["602b1a324b9eab3104d7d153", "602b1b874b9eab3104d7d154"]),
  getMe
);
router.get("/accountInfor", getAccountInfor);
router.post("/createUser", validateCreateUser, createUser);
router.post(
  "/addUser",
  validateAddUser,
  authenticate,
  authorization(["602b1b874b9eab3104d7d154"]),
  AddUser
);
router.post("/login", validateGetUser, login);
router.post(
  "/upload",
  authenticate,
  authorization(["602b1b874b9eab3104d7d154"]),
  uploadImages("hinhAnh"),
  uploadAvater
);
router.get(
  "/paginationUser",
  authenticate,
  authorization(["602b1b874b9eab3104d7d154"]),
  paginationUser
);
router.patch(
  "/updatePassword",
  validateChangePassword,
  authenticate,
  authorization(["602b1a324b9eab3104d7d153", "602b1b874b9eab3104d7d154"]),
  updatePassword
);
router.put(
  "/updateUser/:id",
  authenticate,
  validateUpdateUser,
  authorization(["602b1a324b9eab3104d7d153", "602b1b874b9eab3104d7d154"]),
  updateUser
);
router.delete(
  "/user/:id",
  authenticate,
  authorization(["602b1b874b9eab3104d7d154"]),
  deleteUser
);

module.exports = router;

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

router.get("/user", authenticate, authorization(["AD"]), searchUser);
router.get("/me", authenticate, authorization(["HV", "AD"]), getMe);
router.get("/accountInfor", getAccountInfor);
router.post("/createUser", validateCreateUser, createUser);
router.post(
  "/addUser",
  validateAddUser,
  authenticate,
  authorization(["AD"]),
  AddUser
);
router.post("/login", validateGetUser, login);
router.post(
  "/upload",
  authenticate,
  authorization(["AD"]),
  uploadImages("hinhAnh"),
  uploadAvater
);
router.get(
  "/paginationUser",
  authenticate,
  authorization(["HV", "AD"]),
  paginationUser
);
router.patch(
  "/updatePassword",
  validateChangePassword,
  authorization(["HV", "AD"]),
  updatePassword
);
router.put(
  "/updateUser/:id",
  authenticate,
  validateUpdateUser,
  authorization(["HV", "AD"]),
  updateUser
);
router.delete("/user/:id", authenticate, authorization(["AD"]), deleteUser);

module.exports = router;

const validator = require("validator");
const _ = require("lodash");
const { User } = require("../../../models/User.model");

module.exports.validateAddUser = async (req, res, next) => {
  const taiKhoan = req.body.taiKhoan;
  const email = req.body.email;
  const matKhau = req.body.matKhau;
  const soDt = req.body.soDt;
  const hoTen = req.body.hoTen;
  const role = req.body.role;

  const error = {};

  //email
  if (!taiKhoan) {
    error.taiKhoan = "taiKhoan is required";
  } else {
    const user = await User.findOne({ taiKhoan });
    if (user) error.taiKhoan = "taiKhoan exists";
  }
  //email
  if (!email) {
    error.email = "Email is required";
  } else if (!validator.isEmail(email)) {
    error.email = "Email is invalid";
  } else {
    const user = await User.findOne({ email });
    if (user) error.email = "Email exists";
  }
  // mat khau
  if (!matKhau) {
    error.matKhau = "matKhau is required";
  }
  // soDt
  if (!soDt) {
    error.soDt = "Phone Number is required";
  } else if (!validator.isMobilePhone(soDt)) {
    error.soDt = "Phone Number is invalid";
  }
  // hoTen
  if (!hoTen) {
    error.hoTen = "FullName is require";
  }
  if (!role) {
    error.role = "role is require";
  } else if (
    role !== "602b1a324b9eab3104d7d153" &&
    role !== "602b1b874b9eab3104d7d154"
  ) {
    error.role = "role is invalid";
  }
  if (Object.keys(error).length > 0) {
    return res.status(400).json(error);
  }
  return next();
};

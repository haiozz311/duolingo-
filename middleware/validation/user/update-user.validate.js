const validator = require("validator");
const _ = require("lodash");
const { User } = require("../../../models/User.model");

module.exports.validateUpdateUser = async (req, res, next) => {
  const email = req.body.email;
  const soDt = req.body.soDt;
  const hoTen = req.body.hoTen;
  const error = {};

  if (!email) {
    error.email = "Email is required";
  } else if (!validator.isEmail(email)) {
    error.email = "Email is invalid";
  }
  if (Object.keys(error).length > 0) {
    return res.status(400).json(error);
  }
  // so dt
  if (!soDt) {
    error.soDt = "Phone Number is required";
  } else if (!validator.isMobilePhone(soDt)) {
    error.soDt = "Phone Number is invalid";
  }

  // ho ten
  if (!hoTen) {
    error.hoTen = "FullName is require";
  }

  return next();
};

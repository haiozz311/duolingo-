const validator = require("validator");
const _ = require("lodash");
const { User } = require("../../../models/User.model");

module.exports.validateGetUser = async (req, res, next) => {
  const taiKhoan = req.body.taiKhoan;
  const matKhau = req.body.matKhau;

  const error = {};
  //email
  if (!taiKhoan) {
    error.taiKhoan = "taiKhoan is required";
  } else {
    const user = await User.findOne({ taiKhoan });
    if (!user) error.taiKhoan = "taiKhoan not exists";
  }
  // mat khau
  if (!matKhau) {
    error.matKhau = "matKhau is required";
  }
  if (Object.keys(error).length > 0) {
    return res.status(400).json(error);
  }
  return next();
};

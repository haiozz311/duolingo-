const config = require("../../config/index");
const jwt = require("jsonwebtoken");
const util = require("util");
const jwtVerity = util.promisify(jwt.verify);

module.exports.authenticate = (req, res, next) => {
  const token = req.headers.token;
  jwtVerity(token, config.JWT_SECRET_KEY)
    .then((decoded) => {
      if (!decoded) {
        return res.status(400).json({
          message: "Token is invalid",
        });
      }
      req.user = decoded;
      return next();
    })
    .catch((err) => res.status(500).json(err));
};

module.exports.authorization = (userTypeArray) => {
  return (req, res, next) => {
    const user = req.user;
    if (userTypeArray.indexOf(user.maLoaiNguoiDung) > -1) return next();
    res.status(403).json({ message: "you do not have permission" });
  };
};

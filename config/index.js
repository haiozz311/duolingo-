const dotenv = require("dotenv");
const envPath = __dirname + `/../.env.${process.env.NODE_ENV}`;
dotenv.config({ path: envPath });
console.log(envPath);

const MONGO_URI = process.env.MONGO_URI;
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const USER = process.env.USER;
const PASS = process.env.PASS;

module.exports = {
  MONGO_URI,
  JWT_SECRET_KEY,
  USER,
  PASS,
};

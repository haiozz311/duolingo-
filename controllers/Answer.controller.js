const express = require("express");
const {
  getAnswer,
  createAnswer,
  updateAnswer,
  deleteAnswerById,
} = require("../services/Answer.service");

const router = express.Router();

router.get("/answer", getAnswer);
router.post("/answer", createAnswer);
router.put("/answer/:id", updateAnswer);
router.delete("/answer/:answerId", deleteAnswerById);
module.exports = router;

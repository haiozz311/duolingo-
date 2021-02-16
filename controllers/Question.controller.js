const express = require("express");
const {
  getQuestion,
  createQuestion,
  updateQuestion,
  deleteQuestionById,
} = require("../services/Question.service");

const router = express.Router();

router.get("/question", getQuestion);
router.post("/question", createQuestion);
router.put("/question/:id", updateQuestion);
router.delete("/question/:questionId", deleteQuestionById);
module.exports = router;

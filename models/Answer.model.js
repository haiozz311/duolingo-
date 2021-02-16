const mongoose = require("mongoose");

const AnswerSchema = mongoose.Schema({
  typeAnswer: { type: String, required: true },
  answerArray: { type: String, required: false },
  trueAnswer: { type: String, required: true },
});

const Answer = mongoose.model("Answer", AnswerSchema, "Answer");
module.exports = {
  AnswerSchema,
  Answer,
};

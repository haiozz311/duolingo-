const mongoose = require("mongoose");

const QuestionSchema = mongoose.Schema({
  authorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  topicId: { type: mongoose.Schema.Types.ObjectId, ref: "Topic" },
  contentQuestion: { type: String, required: true },
  typeQuestion: { type: String, required: true },
  createdDate: { type: Date, required: true },
  status: { type: Boolean, required: true, default: true },
  image: { type: String, required: true },
  answerId: { type: mongoose.Schema.Types.ObjectId, ref: "Answer" },
});

const Question = mongoose.model("Question", QuestionSchema, "Question");
module.exports = {
  QuestionSchema,
  Question,
};

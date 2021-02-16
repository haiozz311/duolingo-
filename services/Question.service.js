const { Question } = require("../models/Question.model");

// Get List Questions
module.exports.getQuestion = (req, res, next) => {
  return Question.find()
    .then((question) => {
      return res.status(200).json(question);
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
};

// Create the question
module.exports.createQuestion = (req, res, next) => {
  const {
    authorId,
    topicId,
    contentQuestion,
    typeQuestion,
    createdDate,
    status,
    image,
    questionId,
  } = req.body;

  Question.create({
    authorId,
    topicId,
    contentQuestion,
    typeQuestion,
    createdDate,
    status,
    image,
    questionId,
  })
    .then((question) => {
      res.status(200).json(question);
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
};

// Delete the question
module.exports.deleteQuestionById = (req, res, next) => {
  const { questionId } = req.params;
  let _question;
  Question.findById(questionId)
    .then((question) => {
      if (!question)
        return Promise.reject({
          status: 404,
          Message: "Question Not Found",
        });
      _question = question;
      return question.deleteOne();
    })
    .then(() => res.status(200).json({ message: "Delete Question Successfully!" }))
    .catch((err) => res.status(500).json(err));
};

// Update the question
module.exports.updateQuestion = (req, res, next) => {
  const { id } = req.params;
  const {
    authorId,
    topicId,
    contentQuestion,
    typeQuestion,
    createdDate,
    status,
    image,
    answerId,
  } = req.body;

  Question.findById(id)
    .then((question) => {
      if (!question) {
        return Promise.reject({ status: 404, message: "Question Not Found!!!" });
      }
      question.authorId = authorId;
      question.topicId = topicId;
      question.contentQuestion = contentQuestion;
      question.typeQuestion = typeQuestion;
      question.createdDate = createdDate;
      question.status = status;
      question.image = image;
      question.answerId = answerId;
      return question.save();
    })
    .then((question) => res.status(200).json(question))
    .catch((err) => {
      return res.status(500).json(err);
    });
};

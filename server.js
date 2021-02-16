const express = require("express");
const app = express();
var cors = require("cors");
const config = require("./config/index");
const mongoose = require("mongoose");

const UserController = require("./controllers/User.controller");
const RoleController = require("./controllers/Role.controller");
const TopicController = require("./controllers/Topic.controller");
const QuestionController = require("./controllers/Question.controller");
const AnswerController = require("./controllers/Answer.controller");

app.use(cors());
app.use(express.json());

app.use("/api", UserController);
app.use("/api", RoleController);
app.use("/api", TopicController);
app.use("/api", QuestionController);
app.use("/api", AnswerController);

app.use("/img", express.static("img"));

console.log("config", config.MONGO_URI);
mongoose
  .connect(config.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connect to database successfully");
  })
  .catch(console.log);
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});

const express = require("express");
const {
  getTopic,
  createTopic,
  updateTopic,
  deleteTopicById,
} = require("../services/Topic.service");

const router = express.Router();

router.get("/topic", getTopic);
router.post("/topic", createTopic);
router.put("/topic/:id", updateTopic);
router.delete("/topic/:topicId", deleteTopicById);
module.exports = router;

const { Topic } = require("../models/Topic.model");

// Get List Topic
module.exports.getTopic = (req, res, next) => {
  return Topic.find()
    .then((topic) => {
      return res.status(200).json(topic);
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
};

// Create the Topic
module.exports.createTopic = (req, res, next) => {
  const { contentTopic, status, image } = req.body;

  Topic.create({ contentTopic, status, image })
    .then((topic) => {
      res.status(200).json(topic);
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
};

// Delete the Topic
module.exports.deleteTopicById = (req, res, next) => {
  const { topicId } = req.params;
  let _topic;
  Topic.findById(topicId)
    .then((topic) => {
      if (!topic)
        return Promise.reject({
          status: 404,
          Message: "Topic Not Found",
        });
      _topic = topic;
      return topic.deleteOne();
    })
    .then(() => res.status(200).json({ message: "Delete Topic Successfully!" }))
    .catch((err) => res.status(500).json(err));
};

// Update the Topic
module.exports.updateTopic = (req, res, next) => {
  const { id } = req.params;
  const { contentTopic, status, image } = req.body;

  Topic.findById(id)
    .then((topic) => {
      if (!topic) {
        return Promise.reject({ status: 404, message: "Topic Not Found!!!" });
      }
      topic.contentTopic = contentTopic;
      topic.status = status;
      topic.image = image;
      return topic.save();
    })
    .then((topic) => {
      console.log(topic);
      res.status(200).json(topic);
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
};

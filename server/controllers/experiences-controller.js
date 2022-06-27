const Experience = require("../models/work-experience");
const errorHandle = require("../helpers/error-handler");

const getExperience = (req, res) => {
  Experience.find()
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((error) => errorHandle(res, error));
};

module.exports = {
  getExperience,
};

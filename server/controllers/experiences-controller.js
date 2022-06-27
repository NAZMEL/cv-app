const Experiences = require("../models/work-experiences");
const errorHandle = require("../helpers/error-handler");

const getExperiences = (req, res) => {
  Experiences.find()
    .then((item) => {
      console.log(item);
      res.status(200).json(item);
    })
    .catch((error) => errorHandle(res, error));
};

module.exports = {
  getExperiences,
};

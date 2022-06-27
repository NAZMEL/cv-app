const Education = require("../models/education");
const errorHandle = require("../helpers/error-handler");

const getEducation = (req, res) => {
  Education.find()
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((error) => errorHandle(res, error));
};

module.exports = {
  getEducation,
};

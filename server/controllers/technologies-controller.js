const { Technologies, OtherTechnologies } = require("../models/technologies");
const errorHandle = require("../helpers/error-handler");

const getTechnologies = (req, res) => {
  Technologies.find()
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((error) => errorHandle(res, error));
};

const getOtherTechnologies = (req, res) => {
  OtherTechnologies.find()
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((error) => errorHandle(res, error));
};

module.exports = {
  getTechnologies,
  getOtherTechnologies,
};

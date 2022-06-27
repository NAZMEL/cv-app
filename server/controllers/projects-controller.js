const Projects = require("../models/projects");
const errorHandle = require("../helpers/error-handler");

const getProjects = (req, res) => {
  Projects.find()
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((error) => errorHandle(res, error));
};

module.exports = {
  getProjects,
};

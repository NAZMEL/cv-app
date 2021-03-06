const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectsSchema = new Schema({
  name: String,
  link: String,
  technologies: [],
});

const Projects = mongoose.model("Projects", projectsSchema);

module.exports = Projects;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const technologiesSchema = new Schema({
  languages: [],
  mainLibraries: [],
  teghnologies: [],
  databases: [],
});

const otherTecnologiesSchema = new Schema({
  languages: [],
  pmTools: [],
  technologies: [],
});

const Technologies = mongoose.model("Technologies", technologiesSchema);
const OtherTechnologies = mongoose.model(
  "Other-technologies",
  otherTecnologiesSchema
);

module.exports = { Technologies, OtherTechnologies };

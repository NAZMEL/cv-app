const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const technologiesSchema = new Schema({
  languages: [],
  mainLibraries: [],
  teghnologies: [],
  databases: [],
});

const Technologies = mongoose.model('Technologies', technologiesSchema);

module.exports = Technologies;

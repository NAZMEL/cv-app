const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const technologiesSchema = new Schema({
  languages: [],
  mainLibraries: [],
  tools: [],
  databases: [],
  otherLanguages: [],
});



const Technologies = mongoose.model("Technologies", technologiesSchema);

module.exports = { Technologies };

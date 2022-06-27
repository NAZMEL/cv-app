const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const experienceSchema = new Schema({
  job: String,
  position: String,
  resonsibilities: [],
  workingPeriod: String,
});

const Experience = mongoose.model("Work-experiences", experienceSchema);

module.exports = Experience;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const experiencesSchema = new Schema({
  job: String,
  position: String,
  resonsibilities: [],
  workingPeriod: String,
});

const Experiences = mongoose.model("Work-experiences", experiencesSchema);

module.exports = Experiences;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const educationSchema = new Schema({
  area: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  dates: {
    type: String,
    required: true,
  },
});

const Education = mongoose.model("Education", educationSchema);

module.exports = Education;

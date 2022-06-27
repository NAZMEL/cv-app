const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  telegram: {
    type: String,
    required: true,
  },
  linkedIn: {
    type: String,
    required: true,
  },
  languages: Schema.Types.Mixed,
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;

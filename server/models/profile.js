const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  fullName: String,
  position: String,
  email: String,
  phone: String,
  telegram: String,
  facebook: String,
  linkedIn: String,
  motivationLetter: [],
  languages: Schema.Types.Mixed,
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;

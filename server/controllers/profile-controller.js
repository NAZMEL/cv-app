const Profile = require("../models/profile")
const errorHandle = require("../helpers/error-handler");

const getProfile = (req, res) => {
  Profile.find()
    .then((profile) => {
        res.status(200).json(profile[0])
    })
    .catch((error) => errorHandle(res, error));
};

module.exports = {
  getProfile,
};

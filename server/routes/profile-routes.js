const express = require("express");
const { getProfile } = require("./../controllers/profile-controller");

const router = express.Router();

router.get("/profile", getProfile);

module.exports = router;

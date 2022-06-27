const express = require("express");
const { getExperience } = require("./../controllers/experiences-controller");

const router = express.Router();

router.get("", getExperience);

module.exports = router;

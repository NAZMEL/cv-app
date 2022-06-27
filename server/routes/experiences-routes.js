const express = require("express");
const { getExperience } = require("./../controllers/experiences-controller");

const router = express.Router();

router.get("/experience", getExperience);

module.exports = router;

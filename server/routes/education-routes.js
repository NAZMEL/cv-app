const express = require("express");
const { getEducation } = require("./../controllers/education-controller");

const router = express.Router();

router.get("/education", getEducation);

module.exports = router;

const express = require("express");
const { getExperiences } = require("./../controllers/experiences-controller");

const router = express.Router();

router.get("/experiences", getExperiences);

module.exports = router;

const express = require("express");
const { getProjects } = require("./../controllers/projects-controller");

const router = express.Router();

router.get("", getProjects);

module.exports = router;

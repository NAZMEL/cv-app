const express = require("express");
const { getTechnologies } = require("./../controllers/technologies-controller");

const router = express.Router();

router.get("/technologies", getTechnologies);

module.exports = router;

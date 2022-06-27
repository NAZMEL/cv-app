const express = require("express");
const {
  getTechnologies,
  getOtherTechnologies,
} = require("./../controllers/technologies-controller");

const router = express.Router();

router.get("/technologies", getTechnologies);
router.get("/other-technologies", getOtherTechnologies);

module.exports = router;

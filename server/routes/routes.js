const express = require("express");
const educationRoutes = require("./education-routes");
const experienceRoutes = require("./experiences-routes");
const profileRoutes = require("./profile-routes");
const projectsRoutes = require("./projects-routes");
const technologiesRoutes = require("./technologies-routes");

const router = express.Router();

router.use("/profile", profileRoutes);
router.use("/experience", experienceRoutes);
router.use("/education", educationRoutes);
router.use("/technologies", technologiesRoutes);
router.use("/projects", projectsRoutes);

module.exports = router;

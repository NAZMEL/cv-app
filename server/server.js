require("dotenv").config();
const express = require("express");
const cors = require("cors");
const getMainRoutes = require("./routes/main-routes");
const errorHandler = require("./helpers/error-handler");
const mongoose = require("mongoose");
const getProfileRoutes = require("./routes/profile-routes");
const getEducationRoutes = require("./routes/education-routes");
const getTechnologiesRoutes = require("./routes/technologies-routes");
const getExperiencesRoutes = require("./routes/experiences-routes");

const app = express();
const PORT = process.env.PORT || 3000;
const db = process.env.MONGO_URL;

mongoose
  .connect(db)
  .then((res) => console.log("Connected to Mongo DB"))
  .catch((error) => console.log(error));

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`Listening port: ${PORT}`);
});

app.use(express.urlencoded({ extended: false }));

// Main middlewares
app.use(cors());
app.use(express.json());

// My middlewares
app.use("/api", getMainRoutes);
app.use("/api", getProfileRoutes);
app.use("/api", getEducationRoutes);
app.use("/api", getTechnologiesRoutes);
app.use("/api", getExperiencesRoutes);

app.use((req, res, error) => {
  res.status(404).send("Error");
});

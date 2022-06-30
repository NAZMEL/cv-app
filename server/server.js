require("dotenv").config();
const express = require("express");
const cors = require("cors");
const getMainRoutes = require("./routes/main-routes");
const mongoose = require("mongoose");

const getRoutes = require("./routes/routes");

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
app.use("/api", getRoutes);

app.use((req, res, error) => {
  res.status(404).send(error);
});

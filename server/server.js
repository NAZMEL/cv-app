require("dotenv").config();
const express = require("express");
const cors = require("cors");
const getMainRoutes = require("./routes/main-routes");
const errorHandler = require("./helpers/error-handler");

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`Listening port: ${PORT}`);
});

// Main middlewares
app.use(cors());
app.use(express.json());

// My middlewares
app.use("/api", getMainRoutes);

app.use((req, res, error) => {
  res.status(404).send('Error');
});


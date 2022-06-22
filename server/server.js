require("dotenv").config();
const express = require("express");
const getMainRoutes = require("./routes/main-routes");

const app = express();
const PORT = process.env.PORT || 8000;

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`Listening port: ${PORT}`);
});

app.use(getMainRoutes);

app.use((req, res) => {
  res.status(404).send("Error");
});

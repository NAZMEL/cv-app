require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT;

app.listen(PORT, (error) =>{
    error ? console.log(error) : console.log(`Listening port ${PORT}`);
})
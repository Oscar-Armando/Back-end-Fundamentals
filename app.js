/*Proyecto de base de datos*/
const express = require('express');
const cors = require('cors');
//const mongoose = require('mongoose');

// Global app object
const app = express();

// Middleware config
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get("/", function (req, res) {
    res.send("Bienvenido a la API");
});

// Bootstrap server
const server = app.listen(process.env.PORT || 3000, function () {
    console.log(`Listening on port ${server.address().port}`);
});
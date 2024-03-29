// JavaScript source code
const express = require('express');
const app = express();
const logger = require('morgan');

const routes = require('./routes/index');

app.use(express.json());
//const urlencoded = express.urlencoded({ extended: false });

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    next();
});

app.use(logger("dev"));

app.use("/rickandmorty", routes);

app.get("/", (req, res) => {
    res.status(200).json({ message: "in first server in EXPRESS", app: "BUCARAMANGA" })
})

module.exports = app;
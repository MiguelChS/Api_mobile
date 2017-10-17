"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var repository_1 = require("./repository");
var app = express();
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});
app.use("/", repository_1.Routers(express.Router()));
app.listen(5000);

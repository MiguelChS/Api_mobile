"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router_1 = require("./router");
const mongoose = require("mongoose");
const datosPrueba_1 = require("./service/datosPrueba");
let app = express();
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});
app.use("/", router_1.Routers(express.Router()));
mongoose.connect('mongodb://localhost/Hoteles', { useMongoClient: true });
let db = mongoose.connection;
db.on("error", console.error.bind(console, 'connection error:'));
db.once("open", () => {
    datosPrueba_1.FisrtLoad();
    app.listen(3000, () => {
        console.log("running in http://localhost:3000/");
    });
});
//# sourceMappingURL=index.js.map
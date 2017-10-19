import * as express from 'express';
import { Routers } from './router';
import * as mongoose from 'mongoose';
import { FisrtLoad } from './service/datosPrueba'

let app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});
app.use("/", Routers(express.Router()));

mongoose.connect('mongodb://localhost/Hoteles', { useMongoClient: true })
let db = mongoose.connection;
db.on("error", console.error.bind(console, 'connection error:'))
db.once("open", () => {
    FisrtLoad();
    app.listen(3000, () => {
        console.log("running in http://localhost:3000/")
    })
})
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hoteles_1 = require("../schema/hoteles");
const fake = require("faker");
const fs = require("fs");
function FisrtLoad() {
    let Hotel_new;
    for (let i = 0; i < 20; i++) {
        Hotel_new = {
            name: fake.company.companyName(),
            starts: fake.random.number({ max: 5, min: 1 }),
            price: fake.random.number({ max: 500, min: 100 }),
            image: fs.readFileSync(`./images/image${fake.random.number({ max: 10, min: 1 })}.jpg`, "Base64"),
            address: fake.address.streetAddress(),
            latitud: fake.random.number({ max: 90.000, min: -90.000, precision: 0.52 }),
            longitud: fake.random.number({ max: 180.000, min: -180.000, precision: 0.52 })
        };
        new hoteles_1.Hotel(Hotel_new).save();
    }
}
exports.FisrtLoad = FisrtLoad;
//# sourceMappingURL=datosPrueba.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    name: String,
    starts: Number,
    price: Number,
    image: String,
    address: String,
    latitud: Number,
    longitud: Number
}, { collection: "Hoteles", versionKey: false });
exports.Hotel = mongoose_1.model("Hoteles", exports.UserSchema);
//# sourceMappingURL=hoteles.js.map
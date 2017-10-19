"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = require("../service");
function Routers(router) {
    router.get("/", (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            let Hostel = yield service_1.getListHoteles("");
            let status = Hostel.length ? 200 : 204;
            res.status(status).json(Hostel);
        }
        catch (e) {
            res.status(500).send(e.message);
        }
    }));
    router.get("/filter/:text", (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            let Hostel = yield service_1.getListHoteles(req.params.text);
            let status = Hostel.length ? 200 : 204;
            res.status(status).json(Hostel);
        }
        catch (e) {
            res.status(500).send(e.message);
        }
    }));
    return router;
}
exports.Routers = Routers;
//# sourceMappingURL=index.js.map
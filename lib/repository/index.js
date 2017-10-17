"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Routers(router) {
    router.get("/", function (req, res) {
        res.status(200).send("Hola xD");
    });
    return router;
}
exports.Routers = Routers;

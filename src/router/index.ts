import { Router } from 'express';
import { getListHoteles } from '../service';
export function Routers(router: Router) {
    router.get("/", async (req, res) => {
        try {
            let Hostel = await getListHoteles("");
            let status = Hostel.length ? 200 : 204;
            res.status(status).json(Hostel)
        } catch (e) {
            res.status(500).send(e.message);
        }
    })

    router.get("/filter/:text", async (req, res) => {
        try {
            let Hostel = await getListHoteles(req.params.text);
            let status = Hostel.length ? 200 : 204;
            res.status(status).json(Hostel)
        } catch (e) {
            res.status(500).send(e.message);
        }
    })
    return router;
}
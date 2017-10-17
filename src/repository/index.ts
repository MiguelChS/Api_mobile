import {Router} from 'express';
export function Routers(router : Router){
    router.get("/",(req,res)=>{
        res.status(200).send("Hola xD")
    })
    return router;
}
import { Router } from "express";
import productos from "./productos"
import categoria from "./categoria"
import  Usuarios from "./usuarios"
import auth from "./auth";
import factura from "./factura";
const routes=Router();


routes.use("/productos", productos )// esta es la ruta para postman
routes.use("/categoria", categoria )// esta es la ruta para postman
routes.use("/usuarios", Usuarios)// esta es la ruta para postman
routes.use("/auth", auth)// esta es la ruta para postman
routes.use("/detalle", factura )// esta es la ruta para postman
export default routes;

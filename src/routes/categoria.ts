import { Router } from "express";
import CategoriasController from "../controller/CategoriasController"

const routes=Router();
routes.get("", CategoriasController.getAll)
routes.get("", CategoriasController.getOne)


export default routes;
/*

routes.get("", ProductosController.getAll)
routes.get("/getOne/:id", ProductosController.getOne)
routes.post("", ProductosController.create)
routes.delete("/delete/:id", ProductosController.delete)
routes.put("/put/:id", ProductosController.update)
*/
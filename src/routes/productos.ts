import { Router } from "express";
import ProductosController from "../controller/ProductosController";
import { checkJwt } from "../middleware/jwt";
import { checkRole } from "../middleware/role";

const routes= Router();

routes.get("", [checkJwt, checkRole(["admin"])],ProductosController.getAll)
routes.get("/getOne/:id", ProductosController.getOne)
routes.post("", ProductosController.create)
routes.delete("/delete/:id", ProductosController.delete)
routes.put("/put/:id", ProductosController.update)

export default routes;
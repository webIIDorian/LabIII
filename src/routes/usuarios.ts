import { Router } from "express";
import   UsuariosController from "../controller/UsuariosController";
import { checkRole } from "../middleware/role";
import { checkJwt } from "../middleware/jwt";

const routes= Router();


routes.post("", [checkJwt, checkRole(["admin"])],UsuariosController.new)

export default routes;
import { Router } from "express";
import FacturaController from "../controller/FacturaController";


const routes= Router();


routes.post("", FacturaController.createDetalle)

export default routes;
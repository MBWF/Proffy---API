import express from "express";
import ClassController from "./controllers/ClassesControllers";
import ConnectionsController from "./controllers/ConnectionController";

const routes = express.Router();
const classesControllers = new ClassController();
const connectionsController = new ConnectionsController();

routes.get("/classes", classesControllers.index);
routes.post("/classes", classesControllers.create);

routes.get("/connections", connectionsController.index);
routes.post("/connections", connectionsController.create);

export default routes;

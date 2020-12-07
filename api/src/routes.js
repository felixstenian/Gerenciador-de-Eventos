import { Router } from "express";

import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import EventoController from "./app/controllers/EventoController";
import InscricaoController from "./app/controllers/InscricaoController";

import checkPassword from "./app/middlewares/checkPassword";
import authMiddleware from "./app/middlewares/auth";

const routes = new Router();

routes.post("/signup", UserController.store);
routes.post("/session",checkPassword, SessionController.store);

routes.use(authMiddleware);

routes.post("/evento", EventoController.store);
routes.get("/eventos", EventoController.show);
routes.get("/evento", EventoController.index);
routes.get("/myevents", EventoController.myevents);

routes.post("/inscricao", InscricaoController.store);
routes.get("/inscricao", InscricaoController.show);
routes.get("/minhasinscricoes", InscricaoController.index);

export default routes;

import { Router } from "express";
import ControllerUser from "../controllers/ControllerUser";

const routerUser = Router();
// Rotas de usuário
routerUser.get("/user/:id", ControllerUser.getUser);
routerUser.post("/user/create", ControllerUser.registerUser);
routerUser.post("/user/login", ControllerUser.login);

export default routerUser;

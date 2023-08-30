import { Router } from "express";
import { createLoginController } from "../controllers/login.controllers";

const loginRoutes = Router();

loginRoutes.post("/login", createLoginController);

export { loginRoutes };

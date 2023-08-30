import { Router } from "express";
import {
  createUserController,
  deletUserController,
  getUserController,
  updateUserController,
} from "../controllers/users.controllers";
import { DataIsValid } from "../middlewares/BodyValidated.midlleware";
import { userSchemaRequest } from "../schemas/user.schema";

const userRoutes: Router = Router();

userRoutes.post("/users", DataIsValid(userSchemaRequest), createUserController);
userRoutes.get("/users", getUserController);
userRoutes.patch("/users/:id", updateUserController);
userRoutes.delete("/users/:id", deletUserController);

export default userRoutes;

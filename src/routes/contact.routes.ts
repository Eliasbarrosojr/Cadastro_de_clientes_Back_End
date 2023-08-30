import { Router } from "express";
import {} from "../controllers/users.controllers";
import {
  createContactController,
  deletContactController,
  getContactController,
  updateContactController,
} from "../controllers/contact.controllers";
import { verifyTokenMiddleware } from "../middlewares/Verifytoken.middleware";
import { verifyIsUser } from "../middlewares/VerifyUser.middleware";
import { DataIsValid } from "../middlewares/BodyValidated.midlleware";
import {
  contactSchemaRequest,
  contactSchemaUpdate,
} from "../schemas/contact.schema";

const contactRoutes: Router = Router();

contactRoutes.post(
  "/contact",
  verifyTokenMiddleware,
  DataIsValid(contactSchemaRequest),
  createContactController
);
contactRoutes.get("/contact", verifyTokenMiddleware, getContactController);
contactRoutes.patch(
  "/contact/:id",
  verifyTokenMiddleware,
  verifyIsUser,
  DataIsValid(contactSchemaUpdate),
  updateContactController
);
contactRoutes.delete(
  "/contact/:id",
  verifyTokenMiddleware,
  verifyIsUser,
  deletContactController
);

export default contactRoutes;

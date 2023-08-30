import "reflect-metadata";
import "express-async-errors";
import express from "express";
import userRoutes from "./routes/users.routes";
import { HandleErrors } from "./middlewares/HandleAppErrors.middlewares";
import contactRoutes from "./routes/contact.routes";
import { loginRoutes } from "./routes/login.routes";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

app.use("", userRoutes);
app.use("", contactRoutes);
app.use("", loginRoutes);
app.use(HandleErrors);
export default app;

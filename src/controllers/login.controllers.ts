import { Response, Request } from "express";
import { loginService } from "../services/login/login.service";

const createLoginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const token = await loginService({ email, password });

  return res.json({ token });
};

export { createLoginController };

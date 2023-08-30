import { NextFunction, Response, Request } from "express";
import { AppError } from "../errors/AppErrors";
import { ZodError } from "zod";

const HandleErrors = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }
  console.log(err);

  if (err instanceof ZodError) {
    return res.status(400).json({ message: err.flatten().fieldErrors });
  }

  return res.status(500).json({
    message: "Internal server error",
  });
};

export { HandleErrors };

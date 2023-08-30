import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

const DataIsValid =
  (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction) => {
    const validateDAta = schema.parse(req.body);

    req.body = validateDAta;

    return next();
  };

export { DataIsValid };

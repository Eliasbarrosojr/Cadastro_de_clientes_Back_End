import { Response, Request, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities/contact.entities";

const verifyIsUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contactId = req.params.id;
  const userId = res.locals.userId;

  const contact = await contactRepository.findOne({
    where: {
      id: contactId,
    },
    relations: {
      user: true,
    },
  });

  if (!contact) {
    return res.status(404).json({
      message: "contact not found",
    });
  }

  if (contact?.user.id !== userId) {
    return res.status(403).json({
      message: "You dont`t have permissions",
    });
  }

  return next();
};

export { verifyIsUser };

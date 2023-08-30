import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entities";
import { TContactsResponse } from "../../interfaces/contact.interfaces";
import { User } from "../../entities/user.entities";
import { AppError } from "../../errors/AppErrors";
import { contactsSchemaRes } from "../../schemas/contact.schema";

const listContactService = async (userId: string) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const userRepository = AppDataSource.getRepository(User);

  const userContact: User | null = await userRepository.findOne({
    where: {
      id: userId,
    },
    relations: {
      contacts: true,
    },
  });

  if (!userContact) {
    throw new AppError("user not found", 404);
  }

  return userContact.contacts;
};

export { listContactService };

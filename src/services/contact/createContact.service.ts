import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entities";
import {
  TContactRequest,
  TContactResponse,
} from "../../interfaces/contact.interfaces";
import { User } from "../../entities/user.entities";
import { AppError } from "../../errors/AppErrors";
import { contactSchemaResponse } from "../../schemas/contact.schema";

const createContactService = async (
  data: TContactRequest,
  userId: string
): Promise<TContactResponse> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOneBy({
    id: userId,
  });

  if (!user) {
    throw new AppError("user not found", 404);
  }

  const newContact: Contact = contactRepository.create({
    ...data,
    user,
  });

  await contactRepository.save(newContact);

  return contactSchemaResponse.parse(newContact);
};

export { createContactService };

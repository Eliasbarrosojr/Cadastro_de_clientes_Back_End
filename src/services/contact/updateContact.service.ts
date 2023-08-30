import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entities";
import { AppError } from "../../errors/AppErrors";
import {
  TContactResponse,
  TContactUpdate,
} from "../../interfaces/contact.interfaces";
import { contactSchema } from "../../schemas/contact.schema";

const updateContactService = async (
  data: TContactUpdate,
  contactId: string
): Promise<TContactResponse> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const oldcontact = await contactRepository.findOneBy({ id: contactId });

  if (!oldcontact) {
    throw new AppError("contact not found", 404);
  }

  const newContactData = contactRepository.create({
    ...oldcontact,
    ...data,
  });

  await contactRepository.save(newContactData);

  return contactSchema.parse(newContactData);
};

export { updateContactService };

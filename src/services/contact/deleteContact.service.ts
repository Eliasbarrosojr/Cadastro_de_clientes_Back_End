import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entities";
import { AppError } from "../../errors/AppErrors";

const deleteContactService = async (contactId: string): Promise<void> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contact = await contactRepository.findOneBy({ id: contactId });

  if (!contact) {
    throw new AppError("Contact not found", 404);
  }

  await contactRepository.remove(contact);
};

export { deleteContactService };

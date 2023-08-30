import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entities";

const deleteUserService = async (userId: string): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOneBy({
    id: userId,
  });

  await userRepository.remove(user!);
};

export default deleteUserService;

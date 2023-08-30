import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entities";
import { TUsersResponse } from "../../interfaces/users.interfaces";
import { usersSchemaRes } from "../../schemas/user.schema";

const getUsersService = async (): Promise<TUsersResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const users: User[] = await userRepository.find();

  const returnUsers: TUsersResponse = usersSchemaRes.parse(users);

  return returnUsers;
};

export default getUsersService;

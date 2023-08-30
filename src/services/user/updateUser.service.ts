import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { TUserRequest, TUserResponse } from "../../interfaces/users.interfaces";
import { User } from "../../entities/user.entities";
import { userSchemaResponse } from "../../schemas/user.schema";

const updateUserService = async (
  data: TUserRequest,
  id_user: string
): Promise<TUserResponse> => {
  const userRepositoty: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepositoty.findOneBy({
    id: id_user,
  });

  const updatedUser: User = userRepositoty.create({
    ...user,
    ...data,
  });

  await userRepositoty.save(updatedUser);

  const newData: TUserResponse = userSchemaResponse.parse(updatedUser);

  return newData;
};

export default updateUserService;

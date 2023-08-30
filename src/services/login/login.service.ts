import { compare } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entities";
import { AppError } from "../../errors/AppErrors";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { TLogin } from "../../interfaces/login.interfaces";

const loginService = async ({ email, password }: TLogin) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      email,
    },
  });

  if (!user) {
    throw new AppError("Invalid credentials", 403);
  }

  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    throw new AppError("Invalid credentials", 403);
  }

  const token = jwt.sign(
    {
      userName: user.name,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: "1h",
      subject: user.id,
    }
  );

  return token;
};

export { loginService };

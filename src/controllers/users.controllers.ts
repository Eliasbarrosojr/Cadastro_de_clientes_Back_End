import { Request, Response } from "express";
import { createUserService } from "../services/user/createUser.service";
import getUsersService from "../services/user/getUsers.service";
import { TUserRequest, TUserResponse } from "../interfaces/users.interfaces";
import updateUserService from "../services/user/updateUser.service";
import deleteUserService from "../services/user/deleteUser.service";

const createUserController = async (req: Request, res: Response) => {
  const newUser = await createUserService(req.body);
  return res.status(201).json(newUser);
};

const getUserController = async (req: Request, res: Response) => {
  const users = await getUsersService();
  return res.status(200).json(users);
};

const updateUserController = async (req: Request, res: Response) => {
  const userData: TUserRequest = req.body;
  const idUser = String(req.params.id);
  const updateUser: TUserResponse = await updateUserService(userData, idUser);

  return res.status(200).json(updateUser);
};

const deletUserController = async (req: Request, res: Response) => {
  const userId = String(req.params.id);

  await deleteUserService(userId);

  return res.status(204).send();
};

export {
  createUserController,
  getUserController,
  updateUserController,
  deletUserController,
};

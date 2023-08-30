import { z } from "zod";
import {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  usersSchemaRes,
} from "../schemas/user.schema";

type TUser = z.infer<typeof userSchema>;
type TUserRequest = z.infer<typeof userSchemaRequest>;
type TUserResponse = z.infer<typeof userSchemaResponse>;
type TUsersResponse = z.infer<typeof usersSchemaRes>;

export { TUser, TUserRequest, TUserResponse, TUsersResponse };

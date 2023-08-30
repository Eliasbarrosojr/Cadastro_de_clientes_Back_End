import { z } from "zod";

const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  phone: z.number(),
  createdAt: z.date(),
});

const userSchemaRequest = userSchema.omit({
  id: true,
  createdAt: true,
});

const userSchemaResponse = userSchema.omit({
  password: true,
});

const usersSchemaRes = z.array(userSchemaResponse);

export { userSchema, userSchemaRequest, userSchemaResponse, usersSchemaRes };

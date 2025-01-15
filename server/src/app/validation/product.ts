import { z } from "zod";

const create = z.object({
  name: z
    .string({ required_error: "name is required" })
    .refine((value) => value !== "", { message: "name is required" }),
  price: z.number({ required_error: "price is require" }).min(1),
  picture: z
    .string({ required_error: "picture is required" })
    .refine((value) => value !== "", { message: "picture is required" }),
});

const update = z.object({
  name: z
    .string()
    .refine((value) => value !== "", { message: "name is required" })
    .optional(),
  price: z.number().min(1).optional(),
  picture: z
    .string()
    .refine((value) => value !== "", { message: "picture is required" })
    .optional(),
});

const productSchemaValidation = {
  create,
  update,
};
export default productSchemaValidation;

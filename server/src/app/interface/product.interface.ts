import { z } from "zod";
import productSchemaValidation from "../validation/product";

export interface IProduct {
  name: string;
  price: number;
  picture: string;
  created_at?: Date;
}

export type ICreateProduct = z.infer<typeof productSchemaValidation.create>;

export type IUpdateProduct = z.infer<typeof productSchemaValidation.update>;

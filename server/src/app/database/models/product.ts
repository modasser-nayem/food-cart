import { model, Schema } from "mongoose";
import { IProduct } from "../../interface/product.interface";

const productSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

export const Product = model<IProduct>("Product", productSchema);

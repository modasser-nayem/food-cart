import AppError from "../../error/AppError";
import {
  ICreateProduct,
  IUpdateProduct,
} from "../../interface/product.interface";
import { Product } from "../models/product";

const createProduct = async (data: ICreateProduct) => {
  const result = await Product.create(data);

  return result;
};

const getProductList = async () => {
  const result = await Product.find();

  return result;
};

const getProductDetails = async (id: string) => {
  const result = await Product.findById(id);

  return result;
};

const updateProduct = async ({
  id,
  data,
}: {
  id: string;
  data: IUpdateProduct;
}) => {
  if (!(await Product.findById(id))) {
    new AppError(400, "Product not found!");
  }

  const result = await Product.findByIdAndUpdate(id, data, { new: true });

  return result;
};

const deleteProduct = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);

  return result;
};

const productRepository = {
  createProduct,
  getProductList,
  getProductDetails,
  updateProduct,
  deleteProduct,
};

export default productRepository;

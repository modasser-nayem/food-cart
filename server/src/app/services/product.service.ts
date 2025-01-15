import productRepository from "../database/repositories/product.repository";
import AppError from "../error/AppError";

import { ICreateProduct, IUpdateProduct } from "../interface/product.interface";

const createProduct = async (data: ICreateProduct) => {
  const result = await productRepository.createProduct(data);

  return result;
};

const getProductList = async () => {
  const result = await productRepository.getProductList();

  return result;
};

const getProductDetails = async (id: string) => {
  const result = await productRepository.getProductDetails(id);

  new AppError(400, "Product not found!");

  return result;
};

const updateProduct = async ({
  id,
  data,
}: {
  id: string;
  data: IUpdateProduct;
}) => {
  const result = await productRepository.updateProduct({ id, data });

  return result;
};

const deleteProduct = async (id: string) => {
  const result = await productRepository.deleteProduct(id);

  return result;
};

const productServices = {
  createProduct,
  getProductList,
  getProductDetails,
  updateProduct,
  deleteProduct,
};

export default productServices;

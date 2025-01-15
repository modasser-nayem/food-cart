import productServices from "../services/product.service";
import catchAsync from "../utils/catchAsync";
import sendResponse from "../utils/sendResponse";

const create = catchAsync(async (req, res) => {
  const result = await productServices.createProduct(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Product Successfully Added",
    data: result,
  });
});

const getProductList = catchAsync(async (req, res) => {
  const result = await productServices.getProductList();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Successfully retrieved list of product",
    data: result,
  });
});

const getProductDetails = catchAsync(async (req, res) => {
  const result = await productServices.getProductDetails(req.params.id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Successfully retrieved product details",
    data: result,
  });
});

const update = catchAsync(async (req, res) => {
  const result = await productServices.updateProduct({
    id: req.params.id,
    data: req.body,
  });

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Successfully Updated",
    data: result,
  });
});

const deleteProduct = catchAsync(async (req, res) => {
  const result = await productServices.deleteProduct(req.params.id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Successfully Deleted",
    data: result,
  });
});

export const productController = {
  create,
  getProductList,
  getProductDetails,
  update,
  deleteProduct,
};

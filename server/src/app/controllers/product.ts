import catchAsync from "../utils/catchAsync";
import sendResponse from "../utils/sendResponse";

const create = catchAsync(async (req, res) => {
  const result = "create product";

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Product Successfully Added",
    data: result,
  });
});

const getProductList = catchAsync(async (req, res) => {
  const result = "getProductList";

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Successfully retrieved list of product",
    data: result,
  });
});

const getProductDetails = catchAsync(async (req, res) => {
  const result = "getProductDetails";

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Successfully retrieved product details",
    data: result,
  });
});

const update = catchAsync(async (req, res) => {
  const result = "update product";

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Successfully Updated",
    data: result,
  });
});

const deleteProduct = catchAsync(async (req, res) => {
  const result = "delete product";

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

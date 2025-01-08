import userServices from "../services/user.service";
import catchAsync from "../utils/catchAsync";
import sendResponse from "../utils/sendResponse";

const register = catchAsync(async (req, res) => {
  const result = await userServices.register(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Successfully Register",
    data: result,
  });
});

const login = catchAsync(async (req, res) => {
  const result = await userServices.login(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Successfully Register",
    data: result,
  });
});

export const userController = {
  register,
  login,
};

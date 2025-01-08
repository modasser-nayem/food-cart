import AppError from "../../error/AppError";
import { ILoginUser, IRegisterUser } from "../../interface/user.interface";
import { User } from "../models/user";

const register = async (data: IRegisterUser) => {
  const isEmailExist = await User.findOne({ email: data.email });

  if (isEmailExist) {
    throw new AppError(400, "This email already exist!");
  }

  await User.create(data);
  return null;
};

const login = async (data: ILoginUser) => {
  return await User.findOne({ email: data.email });
};

const userRepositories = {
  register,
  login,
};

export default userRepositories;

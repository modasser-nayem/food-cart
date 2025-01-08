import config from "../config";
import userRepositories from "../database/repositories/user.repository";
import AppError from "../error/AppError";
import { ILoginUser, IRegisterUser } from "../interface/user.interface";
import authHelpers from "../utils/auth";

const register = async (data: IRegisterUser) => {
  data.password = await authHelpers.makeHashPassword(data.password);

  return userRepositories.register(data);
};

const login = async (data: ILoginUser) => {
  const user = await userRepositories.login(data);

  if (!user) {
    throw new AppError(404, "User not exist!");
  }

  if (
    !(await authHelpers.checkPasswordIsCorrect(data.password, user.password))
  ) {
    throw new AppError(400, "incorrect password");
  }

  const access_token = authHelpers.createToken(
    { id: user.id, role: user.role as string },
    config.jwt_access_secret,
    config.jwt_access_expires_in,
  );

  return { access_token };
};

const userServices = {
  register,
  login,
};

export default userServices;

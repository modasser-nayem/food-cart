import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config";
import { ExtendedJwtPayload } from "../interface";

const makeHashPassword = async (plainTextPassword: string) => {
  return await bcrypt.hash(
    plainTextPassword,
    Number(config.bcrypt_salt_rounds),
  );
};

const checkPasswordIsCorrect = async (
  plainTextPassword: string,
  hashPassword: string,
) => {
  return await bcrypt.compare(plainTextPassword, hashPassword);
};

const createToken = (
  jwtPayload: { id: string; role: string },
  secret: string,
  expiresIn: string,
) => {
  return jwt.sign(jwtPayload, secret, {
    expiresIn,
  });
};

const verifyToken = (token: string, secret: string) => {
  return jwt.verify(token, secret) as ExtendedJwtPayload;
};

const authHelpers = {
  makeHashPassword,
  checkPasswordIsCorrect,
  createToken,
  verifyToken,
};

export default authHelpers;

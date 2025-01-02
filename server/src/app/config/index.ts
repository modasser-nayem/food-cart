/* eslint-disable no-console */
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

if (!process.env.NODE_ENV) {
  console.error("Please set NODE_ENV");
}

if (!process.env.PORT) {
  console.error("Please set PORT");
}
if (!process.env.PORT) {
  console.error("Please set PORT");
}
if (!process.env.DATABASE_URL) {
  console.error("Please set DATABASE_URL");
}
if (!process.env.BCRYPT_SALT_ROUNDS) {
  console.error("Please set BCRYPT_SALT_ROUNDS");
}
if (!process.env.JWT_ACCESS_SECRET) {
  console.error("Please set JWT_ACCESS_SECRET");
}
if (!process.env.JWT_ACCESS_EXPIRES_IN) {
  console.error("Please set JWT_ACCESS_EXPIRES_IN");
}

export default {
  node_env: process.env.NODE_ENV as string,
  port: process.env.PORT,
  db_url: process.env.DATABASE_URL,
  bcrypt_salt_rounds: Number(process.env.BCRYPT_SALT_ROUNDS),
  jwt_access_secret: process.env.JWT_ACCESS_SECRET as string,
  jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN as string,
};

import { Router } from "express";
import { userController } from "../controllers/user";
import requestValidate from "../middlewares/requestValidation";
import userSchemaValidation from "../validation/user";

const router = Router();

router.post(
  "/register",
  requestValidate(userSchemaValidation.register),
  userController.register,
);

router.post(
  "/login",
  requestValidate(userSchemaValidation.login),
  userController.login,
);

export const userRoutes = router;

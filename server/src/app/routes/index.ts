import { Router } from "express";
import { userRoutes } from "./user.routes";
import { productRoutes } from "./product.routes";

const router = Router();
const moduleRoutes = [
  {
    path: "/users",
    route: userRoutes,
  },
  {
    path: "/products",
    route: productRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

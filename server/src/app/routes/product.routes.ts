import { Router } from "express";
import requestValidate from "../middlewares/requestValidation";
import productSchemaValidation from "../validation/product";
import { productController } from "../controllers/product";

const router = Router();

router.post(
  "/",
  requestValidate(productSchemaValidation.create),
  productController.create,
);

router.get("/", productController.getProductList);

router.get("/:id", productController.getProductDetails);

router.put(
  "/:id",
  requestValidate(productSchemaValidation.update),
  productController.update,
);

router.delete("/:id", productController.deleteProduct);

export const productRoutes = router;

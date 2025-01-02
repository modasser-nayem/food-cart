import { Router } from "express";

const router = Router();

router.get("/register", (_req, res) => {
  res.status(200).json({
    message: "Successfully Register",
  });
});

export const userRoutes = router;

import { Router } from "express";
import {
  createUser,
  getUsers
} from "../controllers/user.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { roleMiddleware } from "../middlewares/role.middleware";

const router = Router();

// Only staff can manage users
router.post("/", authMiddleware, roleMiddleware("admin"), createUser);
router.get("/", authMiddleware, roleMiddleware("admin"), getUsers);

export default router;

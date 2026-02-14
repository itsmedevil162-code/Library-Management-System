import { Router } from "express";
import {
  createBook,
  getBooks,
  updateBook,
  deleteBook,
} from "../controllers/book.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { roleMiddleware } from "../middlewares/role.middleware";

const router = Router();

router.get("/", getBooks);

router.post("/", authMiddleware, roleMiddleware("admin"), createBook);

router.put("/:id", authMiddleware, roleMiddleware("admin"), updateBook);

router.delete("/:id", authMiddleware, roleMiddleware("admin"), deleteBook);

export default router;


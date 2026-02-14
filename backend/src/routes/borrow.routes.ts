import { Router } from "express";
import {
  borrowBook,
  returnBook,
  myBooks
} from "../controllers/borrow.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

// Customer borrows book
router.post("/", authMiddleware, borrowBook);

// Customer returns book
router.delete("/:id", authMiddleware, returnBook);

// Get my borrowed books
router.get("/my", authMiddleware, myBooks);

export default router;

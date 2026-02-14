import { Response, NextFunction } from "express";
import { AuthRequest } from "../middlewares/auth.middleware";
import { BorrowService } from "../services/borrow.service";
import { BorrowRepository } from "../repositories/borrow.repository";

export const borrowBook = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const { bookId, quantity } = req.body;

    const record = await BorrowService.borrow(
      req.user.id,
      bookId,
      quantity
    );

    res.status(201).json(record);
  } catch (error) {
    next(error);
  }
};

export const returnBook = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const borrowId = req.params.id;

    if (!borrowId || typeof borrowId !== "string") {
      res.status(400).json({ message: "Borrow ID is required" });
      return;
    }

    await BorrowService.returnBook(borrowId);
    res.status(200).json({ message: "Book returned successfully" });
  } catch (error) {
    next(error);
  }
};

export const myBooks = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const records = await BorrowRepository.findByUser(req.user.id);
    res.status(200).json(records);
  } catch (error) {
    next(error);
  }

};


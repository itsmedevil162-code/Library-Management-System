import { Request, Response, NextFunction } from "express";
import { BookService } from "../services/book.service";

/**
 * Create a new book
 */
export const createBook = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const book = await BookService.create(req.body);
    res.status(201).json(book);
  } catch (error) {
    next(error);
  }
};

/**
 * Get all books or search books
 */
export const getBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const searchQuery = req.query.search;

    if (typeof searchQuery === "string") {
      const books = await BookService.search(searchQuery);
      res.status(200).json(books);
      return;
    }

    const books = await BookService.getAll();
    res.status(200).json(books);
  } catch (error) {
    next(error);
  }
};

/**
 * Update book by ID
 */
export const updateBook = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params as { id: string };

    const updatedBook = await BookService.update(id, req.body);

    res.status(200).json(updatedBook);
  } catch (error) {
    next(error);
  }
};

/**
 * Delete book by ID
 */
export const deleteBook = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params as { id: string };

    await BookService.delete(id);

    res.status(200).json({
      message: "Book deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

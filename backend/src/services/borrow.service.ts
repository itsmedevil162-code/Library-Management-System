import { BorrowRepository } from "../repositories/borrow.repository";
import { BookRepository } from "../repositories/book.repository";


export const BorrowService = {
  borrow: async (
    userId: string,
    bookId: string,
    quantity: number
  ) => {
    const book = await BookRepository.findById(bookId);

    if (!book) {
      throw new Error("Book not found");
    }

    if (book.quantity < quantity) {
      throw new Error("Not enough books available");
    }

    // Decrease quantity
    book.quantity -= quantity;
    await book.save();

    return await BorrowRepository.create({
      userId,
      bookId,
      quantity
    });
  },

  returnBook: async (borrowId: string) => {
    const record = await BorrowRepository.findById(borrowId);

    if (!record) {
      throw new Error("Borrow record not found");
    }

    const book = await BookRepository.findById(
      record.bookId.toString()
    );

    if (book) {
      book.quantity += record.quantity;
      await book.save();
    }

    await BorrowRepository.delete(borrowId);
  },


};


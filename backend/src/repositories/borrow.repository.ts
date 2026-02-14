import { Borrow } from "../models/Borrow";

export const BorrowRepository = {
  create: async (data: any) => {
    return await Borrow.create(data);
  },

  findById: async (id: string) => {
    return await Borrow.findById(id);
  },

  findByUser: async (userId: string) => {
    return await Borrow.find({ userId }).populate("bookId");
  },

  delete: async (id: string) => {
    return await Borrow.findByIdAndDelete(id);
  }
};

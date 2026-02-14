import { Book } from "../models/Book";

export const BookRepository = {
  create: async (data: any) => {
    return await Book.create(data);
  },

  findAll: async () => {
    return await Book.find();
  },

  findById: async (id: string) => {
    return await Book.findById(id);
  },

  update: async (id: string, data: any) => {
    return await Book.findByIdAndUpdate(id, data, {
      new: true
    });
  },

  delete: async (id: string) => {
    return await Book.findByIdAndDelete(id);
  },

  search: async (query: string) => {
    return await Book.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { author: { $regex: query, $options: "i" } }
      ]
    });
  }
};


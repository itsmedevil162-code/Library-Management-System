import { BookRepository } from "../repositories/book.repository";

export const BookService = {
  create: async (data: any) => {
    return await BookRepository.create(data);
  },

  getAll: async () => {
    return await BookRepository.findAll();
  },

  update: async (id: string, data: any) => {
    const updated = await BookRepository.update(id, data);

    if (!updated) {
      throw new Error("Book not found");
    }

    return updated;
  },

  delete: async (id: string) => {
    const deleted = await BookRepository.delete(id);

    if (!deleted) {
      throw new Error("Book not found");
    }

    return deleted;
  },

  search: async (query: string) => {
    return await BookRepository.search(query);
  }
};

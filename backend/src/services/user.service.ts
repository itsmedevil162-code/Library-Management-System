import bcrypt from "bcryptjs";
import { UserRepository } from "../repositories/user.repository";

export const UserService = {
  create: async (data: any) => {
    const existing = await UserRepository.findByEmail(data.email);

    if (existing) {
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    return await UserRepository.create({
      ...data,
      password: hashedPassword
    });
  },

  getAll: async () => {
    return await UserRepository.findAll();
  }
};

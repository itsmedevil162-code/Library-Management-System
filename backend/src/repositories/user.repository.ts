import { User } from "../models/User";

export const UserRepository = {
  create: async (data: any) => {
    return await User.create(data);
  },

  findAll: async () => {
    return await User.find().select("-password");
  },

  findByEmail: async (email: string) => {
    return await User.findOne({ email });
  },

  findById: async (id: string) => {
    return await User.findById(id);
  }
};

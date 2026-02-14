import { Request, Response, NextFunction } from "express";
import { UserService } from "../services/user.service";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const user = await UserService.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const users = await UserService.getAll();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

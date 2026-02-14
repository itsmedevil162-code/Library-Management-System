import { Request, Response, NextFunction } from "express";
import { AuthService } from "../services/auth.service";

/**
 * Register new user
 */
export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { firstName, lastName, email, password, role } = req.body;

    const user = await AuthService.register({
      firstName,
      lastName,
      email,
      password,
      role,
    });

    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};
/**
 * Login user
 */
export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { email, password } = req.body;

    const result = await AuthService.login(email, password);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

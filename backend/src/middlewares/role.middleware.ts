import { Response, NextFunction } from "express";
import { AuthRequest } from "./auth.middleware";

export const roleMiddleware = (
  role: "admin" | "staff" | "customer"
) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (req.user.role !== role) {
      return res.status(403).json({ message: "Forbidden" });
    }
    

     // 🔥 ADD THESE TWO LINES
    console.log("TOKEN ROLE:", req.user.role);
    console.log("REQUIRED ROLE:", role);

    if (req.user.role !== role) {
      return res.status(403).json({ message: "Forbidden" });
    }



    next();
  };
};

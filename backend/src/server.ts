import dotenv from "dotenv";
dotenv.config(); // ✅ MUST BE FIRST

import express from "express";
import cors from "cors";

import { connectDB } from "./config/db";
import authRoutes from "./routes/auth.routes";
import bookRoutes from "./routes/book.routes";
import userRoutes from "./routes/user.routes";
import borrowRoutes from "./routes/borrow.routes";
import { errorMiddleware } from "./middlewares/error.middleware";

const app = express();

// Connect Database
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/users", userRoutes);
app.use("/api/borrow", borrowRoutes);

// ✅ Error handler MUST be last
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
console.log("SERVER SECRET:", process.env.JWT_SECRET);

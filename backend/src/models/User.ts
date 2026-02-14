import mongoose, { Document, Schema } from "mongoose";

export type Role = "staff" | "customer" | "admin" ;

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema: Schema<IUser> = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ["staff", "customer", "admin"],
      required: true
    }
  },
  { timestamps: true }
);

export const User = mongoose.model<IUser>("User", userSchema);

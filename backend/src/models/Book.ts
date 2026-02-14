import mongoose, { Document, Schema } from "mongoose";

export interface IBook extends Document {
  name: string;
  description?: string;
  author: string;
  imageUrl?: string;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
}

const bookSchema: Schema<IBook> = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    imageUrl: {
      type: String,
    },
    quantity: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { timestamps: true }
);

export const Book = mongoose.model<IBook>("Book", bookSchema);

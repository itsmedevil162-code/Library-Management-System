import mongoose, { Document, Schema, Types } from "mongoose";

export interface IBorrow extends Document {
  userId: Types.ObjectId;
  bookId: Types.ObjectId;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
}

const borrowSchema: Schema<IBorrow> = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    bookId: {
      type: Schema.Types.ObjectId,
      ref: "Book",
      required: true
    },
    quantity: {
      type: Number,
      required: true,
      min: 1
    }
  },
  { timestamps: true }
);

export const Borrow = mongoose.model<IBorrow>("Borrow", borrowSchema);

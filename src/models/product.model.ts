import mongoose, { Schema } from "mongoose";
import { IProduct } from "../interfaces/IProduct";

const productSchema = new Schema<IProduct>(
  {
    name: String,
    price: Number,
    userId: String,

    imageUrl: String,
    quantity: Number,

    description: String,
    category: String,
  },
  { timestamps: true }
);

export default mongoose.model<IProduct>("Product", productSchema);
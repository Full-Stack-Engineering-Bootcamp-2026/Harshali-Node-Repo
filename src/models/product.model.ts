import mongoose, { Document } from "mongoose"
import { IProduct } from "../types/product.types"

export interface IProductDoc extends IProduct, Document {}

const productSchema = new mongoose.Schema<IProductDoc>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: String
}, 

{ timestamps: true })

export const Product = mongoose.model<IProductDoc>("Product", productSchema)
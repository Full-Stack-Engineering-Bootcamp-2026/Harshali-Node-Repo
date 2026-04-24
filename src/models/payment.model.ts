import mongoose, { Document } from "mongoose"
import { IPayment } from "../types/payment.types"

export interface IPaymentDoc extends IPayment, Document {}

const paymentSchema = new mongoose.Schema<IPaymentDoc>({
    
  orderId: String,
  paymentId: String,
  amount: Number,
  status: String
}, 

{ timestamps: true })

export const Payment = mongoose.model<IPaymentDoc>("Payment", paymentSchema)
import { razorpay } from "../config/razorpay"
import { Payment } from "../models/payment.model"

export const createOrderService = async (amount: number) => {
  const order = await razorpay.orders.create({
    amount: amount * 100,
    currency: "INR"
  })

  await Payment.create({
  orderId: order.id,
  amount: order.amount as number,
  status: "created"
});
  return order
}

export const updatePaymentService = async (  orderId: string,
  paymentId: string, status: string) => 
    {  return await Payment.findOneAndUpdate(

    { orderId },
    { paymentId, status },
    { new: true }
  )
}
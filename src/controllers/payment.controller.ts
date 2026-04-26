import { Request, Response, NextFunction } from "express";
import crypto from "crypto";

import {
  createOrderService,
  updatePaymentService,
} from "../services/payment.service";

export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { amount } = req.body;
    const order = await createOrderService(amount);
    res.json(order);
  } catch (err) {
    next(err);
  }
};

//verify payement

export const verifyPayment = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expected = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET as string)
      .update(body)
      .digest("hex");

    if (expected === razorpay_signature) {
      await updatePaymentService(
        razorpay_order_id,
        razorpay_payment_id,
        "success",
      );
      return res.json({ success: true });
    }

    res.status(400).json({ success: false });
  } catch (err) {
    next(err);
  }
};

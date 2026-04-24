import Razorpay from "razorpay"
import dotenv from "dotenv"

dotenv.config()

const key_id = process.env.RAZORPAY_KEY_ID as string
const key_secret = process.env.RAZORPAY_KEY_SECRET as string

if (!key_id || !key_secret) {

  throw new Error("Razorpay keys missing")
}

export const razorpay = new Razorpay({
  key_id,
  key_secret
})
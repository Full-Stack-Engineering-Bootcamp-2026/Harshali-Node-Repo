export interface IPayment {
  orderId: string;
  paymentId?: string;
  amount: number;
  status: "created" | "success" | "failed";
  
}
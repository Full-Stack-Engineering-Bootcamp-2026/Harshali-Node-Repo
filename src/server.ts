import express from "express";
import { Request,Response,NextFunction } from "express";
import myRoutes from './routes/payment.routes'
import dotenv from 'dotenv'
import cors from 'cors'
import { connectDB } from "./config/db";


dotenv.config()

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/payment", myRoutes);

app.get("/", (req: Request, res:Response) => {

  res.send("Hello TS ");
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.message);
  res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});


connectDB().then(() => {
  app.listen(5001, () => {
    console.log("Server running on port 5001");
  });
});
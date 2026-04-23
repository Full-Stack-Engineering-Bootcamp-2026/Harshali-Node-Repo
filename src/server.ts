import express, { Request, Response, NextFunction } from "express"

import { connectDB } from "./config/db"

import productRoutes from "./routes/product.routes"
const app = express()

app.use(express.json())
app.use("/api/products", productRoutes)

app.use((err: any, req: any, res: any, next: any) => {
  res.status(500).json({ message: err.message })
})

const start = async () => {
  await connectDB()
  app.listen(3000)
}

start()
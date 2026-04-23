import { Request, Response, NextFunction } from "express"
import { Product } from "../models/product.model"
import path from "path"
import fs from "fs"
import { getPagination } from "../utils/pagination"

export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {

    const product = await Product.create({
      name: req.body.name,
      price: Number(req.body.price),
      image: req.file?.filename


    })
    res.json({ success: true, data: product })
  } 
  catch (err) {
    next(err)
  }
}

export const getProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {


    const { page, limit, skip } = getPagination(req.query)
    const products = await Product.find().skip(skip).limit(limit)
    const total = await Product.countDocuments()
    res.json({
      success: true,
      page,
      totalPages: Math.ceil(total / limit),
      data: products
    })
  } 
  
  catch (err) {
    next(err)
  }
}

export const getImage = async (req: Request, res: Response, next: NextFunction) => {
  try {

    const product = await Product.findById(req.params.id)
    if (!product || !product.image) {
      return res.status(404).json({ message: "Image not found" })
    }
    const filePath = path.join(__dirname, "../../uploads", product.image)
    res.sendFile(filePath)
  } 
  catch (err) {
    next(err)
  }
}

export const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {


    const product = await Product.findById(req.params.id)

    if (!product) {
      return res.status(404).json({ message: "Not found" })
    }
    if (product.image) {

      const filePath = path.join(__dirname, "../../uploads", product.image)
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath)
    }
    await product.deleteOne()
    res.json({ success: true })
  }
   catch (err) {
    next(err)
  }
}
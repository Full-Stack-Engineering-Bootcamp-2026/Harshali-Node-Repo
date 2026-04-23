import express from "express"
import { upload } from "../middlware/upload.middleware"
import { createProduct, getProducts, getImage, deleteProduct } from "../controllers/product.controller"

const router = express.Router()

router.post("/", upload.single("image"), createProduct)

router.get("/", getProducts)

router.get("/:id/image", getImage)

router.delete("/:id", deleteProduct)

export default router
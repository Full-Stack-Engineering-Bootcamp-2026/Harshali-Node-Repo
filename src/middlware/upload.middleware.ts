import multer from "multer"
import path from "path"
import { Request } from "express"

const storage = multer.diskStorage({

  destination: (req: Request, file: Express.Multer.File, cb) => {
    cb(null, "uploads")
  },
  filename: (req: Request, file: Express.Multer.File, cb) => {
    const uniqueName = Date.now() + path.extname(file.originalname)
    cb(null, uniqueName)
 
}
})

export const upload = multer({ storage })
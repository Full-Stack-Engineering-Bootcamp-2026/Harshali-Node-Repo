import Product from "../models/product.model";

export class ProductService{

    async create(data:any){                 //whyyyy
        return Product.create(data);
    }

    async getAll(userId: string){
        return Product.find({userId})
    }

    async getById(id: string){
        return Product.findById(id)
    }
    async update(id: string,data:any){
        return Product.findByIdAndUpdate(id,data,{new: true})
    }

    async delete(id:string){
        return Product.findByIdAndDelete(id)
    }
}
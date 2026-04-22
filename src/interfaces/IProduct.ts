export interface IProduct {
  name: string;
  price: number;
  userId: string;

  imageUrl: string;
  quantity: number;

  description: string;
  category: string;

  createdAt: Date;
  updatedAt: Date;
}
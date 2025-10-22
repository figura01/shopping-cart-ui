export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
  rating: number;
  image: string;
};

export type InsertProduct = Omit<Product, "id">;
export type UpdateProduct = Partial<Omit<Product, "id">>;

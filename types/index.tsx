export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  rating: number;
  image: string;
};

export type Cart = Product & {
  qty: number;
};

export type InsertProduct = Omit<Product, "id">;
export type UpdateProduct = Partial<Omit<Product, "id">>;

export type ProductContextProps = {
  products: Product[];
  loading: boolean;
  error: string | null;
};

export type CartContextProps = {
  cart: Cart[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
};

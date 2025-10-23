/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect, useContext } from "react";

import type { Product } from "../../types";

import { createContext } from "react";
import type { ProductContextProps } from "../../types";

const ProductContext = createContext<ProductContextProps>({
  products: [],
  loading: true,
  error: null,
});

export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
};

export function useProducts() {
  return useContext(ProductContext);
}

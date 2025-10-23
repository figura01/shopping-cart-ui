import ProductCard from "./ProductCard";
import { useProducts } from "../context/ProductContext";
import type { Product } from "../../types";

const ProductList = () => {
  const { products, loading, error } = useProducts();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {loading && <p>Loading products...</p>}
      {error && <div className="error">Error: {error}</div>}
      {products.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;

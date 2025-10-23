import type { Product } from "../../types";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  return (
    <div className="bg-white p-4 rounded-lg shadow flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 object-cover rounded mb-4"
      />
      <h2 className="text-xl font-semibold text-gray-900">{product.name}</h2>
      <p className="text-gray-500 text-sm mb-2">{product.description}</p>
      <p className="text-gray-900 font-bold text-lg">
        ${product.price.toFixed(2)}
      </p>
      <button
        className="bg-blue-600 text-white mt-3 px-4 py-2 rounded transition hover:bg-blue-700"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

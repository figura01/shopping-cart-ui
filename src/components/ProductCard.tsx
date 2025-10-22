import type { Product } from "../../types";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="flex flex-col bg-white p-4 rounded-lg shadow">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 object-cover rounded mb-4"
      />
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-gray-500 text-sm mb-2">{product.description}</p>
      <p className="font-bold text-lg">${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;

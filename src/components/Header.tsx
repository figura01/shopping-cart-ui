import { useState } from "react";
import { useCart } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { cart, removeFromCart, clearCart } = useCart();
  const itemCount = cart.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = cart
    .reduce((acc, item) => acc + item.price * item.qty, 0)
    .toFixed(2);

  return (
    <header className="bg-white  shadow-md flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold text-blue-600">ShopMate</h1>

      <div className="relative">
        <button
          className="cursor-pointer bg-white"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <FaShoppingCart className="text-2xl text-gray-700 " />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {itemCount}
            </span>
          )}
        </button>
        {showDropdown && (
          <div className="absolute right-0 mt-2 w-80 bg-white border rounded shadow-lg z-50">
            <div className="p-4">
              <h2 className="font-semibold text-lg mb-2 text-gray-900">
                Cart Summary
              </h2>
              {cart.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
              ) : (
                <>
                  <ul className="max-h-60 overflow-y-auto">
                    {cart.map((item) => (
                      <li key={item.id} className="flex justify-between mb-2">
                        <div>
                          <p className="font-semibold text-gray-700">
                            {item.name} x {item.qty}
                          </p>
                          <p className="font-semibold text-sm text-gray-400">
                            ${(item.price * item.qty).toFixed(2)}
                          </p>
                        </div>
                        <button
                          className="text-sm text-red-500 hover:underline"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t pt-2 mt-2 flex justify-between font-bold text-gray-900">
                    <span>Total:</span>
                    <span>${totalPrice}</span>
                  </div>
                  <button
                    className="mt-3 w-full bg-red-500 text-white py-1 rounded transition hover:bg-red-600"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

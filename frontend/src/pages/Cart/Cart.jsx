
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import axios from "axios";
import { backend } from "../../utils/Constants";
import { Link } from "react-router-dom";

const Cart = () => {
  const [carts, setCarts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch cart items from backend
  const fetchCartItems = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${backend}/api/cart/cart`, {
        withCredentials: true,
      });
      setCarts(response.data);
      setLoading(false);
      // console.log("Cart Updated:", response.data);
    } catch (error) {
      console.log("Error fetching cart:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  // Handle quantity update
  const handleQuantity = async (id, currentQuantity, delta) => {
    // Calculate new quantity
    const newQuantity = currentQuantity + delta;

    // Don't allow quantities less than 1
    if (newQuantity < 1) return;

    try {
      // Update local state first for immediate UI feedback
      setCarts(prevCarts =>
        prevCarts.map(item =>
          item.productId._id === id
            ? { ...item, quantity: newQuantity }
            : item
        )
      );

      // Make the API call to update the quantity
      await axios.post(
        `${backend}/api/cart/postcart`,
        { id, quantity: newQuantity },
        { withCredentials: true }
      );

      // No need to call fetchCartItems() here - we've already updated the UI
    } catch (error) {
      console.error("Error updating quantity:", error);

      // If the API call fails, revert back to the original state
      fetchCartItems();
    }
  };

  // Handle removal of item from cart
  const handleRemove = async (id) => {
    try {
      // Update local state first for immediate UI feedback
      setCarts(prevCarts => prevCarts.filter(item => item.productId._id !== id));

      // Then make the API call
      await axios.delete(`${backend}/api/cart/deletecart`, {
        data: { id },
        withCredentials: true,
      });
      await fetchCartItems()
      // No need to call fetchCartItems() here
    } catch (error) {
      console.error("Error removing item from cart:", error);

      // If the API call fails, revert back to the original state
      fetchCartItems();
    }
  };

  // Calculate totals
  const subtotal = carts.reduce(
    (acc, item) => acc + item?.productId?.price * item.quantity,
    0
  );
  const discount = subtotal * 0.1;
  const total = subtotal - discount;

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 grid md:grid-cols-3 gap-6">
      {/* Cart Items Section */}
      <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
        {loading ? (
          <p className="text-gray-500">Loading your cart...</p>
        ) : carts.length === 0 ? (
          <div>
            <p className="text-gray-500">Your cart is empty.</p>
            <button className="mt-4 text-blue-500">Continue Shopping</button>
          </div>
        ) : (
          carts.map((item) => (
            <div
              key={item?.productId?._id}
              className="flex items-center justify-between border-b pb-4 mb-4"
            >
              <img
                src={item?.productId?.images?.[0] || "/placeholder.svg"}
                alt={item?.productId?.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1 px-4">
                <h3 className="font-semibold text-lg">
                  {item?.productId?.name}
                </h3>
                <p className="text-blue-600 font-medium">
                  ${item?.productId?.price}
                </p>
                <div className="mt-2 flex items-center">
                  <button
                    onClick={() =>
                      handleQuantity(
                        item?.productId?._id,
                        item?.quantity,
                        -1
                      )
                    }
                    className="px-3 py-1 bg-gray-300 rounded-md text-lg"
                  >
                    -
                  </button>
                  <span className="mx-3 text-lg font-medium">
                    {item?.quantity}
                  </span>
                  <button
                    onClick={() =>
                      handleQuantity(
                        item?.productId?._id,
                        item?.quantity,
                        1
                      )
                    }
                    className="px-3 py-1 bg-gray-300 rounded-md text-lg"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => handleRemove(item?._id)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTrash size={20} />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Price Summary Section */}
      <div className="bg-white p-6 rounded-lg shadow-md h-fit sticky top-6">
        <h2 className="text-xl font-semibold mb-4">Price Summary</h2>
        <p className="flex justify-between mb-2">
          Subtotal: <span>${subtotal.toFixed(2)}</span>
        </p>
        <p className="flex justify-between mb-2 text-green-600">
          Discount (10%): <span>-${discount.toFixed(2)}</span>
        </p>
        <hr className="my-2" />
        <p className="flex justify-between text-lg font-semibold">
          Total: <span>${total.toFixed(2)}</span>
        </p>
        <button
  disabled={carts.length === 0}
  className={`w-full py-2 px-4 rounded-lg transition-colors duration-200 ${
    carts.length === 0
      ? "bg-gray-400 cursor-not-allowed text-white"
      : "bg-blue-600 hover:bg-blue-700 text-white"
  }`}
>
  <Link to={carts.length === 0 ? "#" : "/payment"}>Proceed to Checkout</Link>
</button>
      </div>
    </div>
  );
};

export default Cart;

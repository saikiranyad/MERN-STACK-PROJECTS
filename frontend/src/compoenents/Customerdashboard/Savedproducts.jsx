import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { backend } from '../../utils/Constants';

const Savedproducts = () => {
  const [savedProducts, setSavedProducts] = useState([]);

  useEffect(() => {
    const fetchSavedProducts = async () => {
      try {
        const response = await axios.get(`${backend}/api/cart/cart`, { withCredentials: true });

        console.log('Cart API Response:', response.data); // Debug log

        // Handle cases where the response is an object like { cart: [...] }
        const products = Array.isArray(response.data)
          ? response.data
          : Array.isArray(response.data.cart)
          ? response.data.cart
          : [];

        setSavedProducts(products);
      } catch (error) {
        console.error('Error fetching saved products:', error);
      }
    };

    fetchSavedProducts();
  }, []);

  const handleRemove = async (id) => {
    try {
      // Optional: send delete request to backend
      // await axios.delete(`/api/cart/${id}`, { withCredentials: true });

      // Remove locally for instant feedback
      setSavedProducts((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      console.error('Error removing saved product:', error);
    }
  };

  return (
    <div className="container mx-auto p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Saved Products</h2>
      <div className="space-y-4">
        {savedProducts.length === 0 ? (
          <p className="text-gray-500">No saved products yet.</p>
        ) : (
          savedProducts.map((item) => (
            <div
              key={item._id}
              className="flex flex-col sm:flex-row items-center bg-white p-4 rounded-lg shadow-md gap-4"
            >
              <img
                src={item.productId?.image || 'https://via.placeholder.com/100'}
                alt={item.productId?.name || 'Product'}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-lg font-semibold">
                  {item.productId?.name || 'Unknown Product'}
                </h3>
                <p className="text-gray-600">
                  ${item.productId?.price || '0.00'}
                </p>
              </div>
              <button
                onClick={() => handleRemove(item._id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Savedproducts;

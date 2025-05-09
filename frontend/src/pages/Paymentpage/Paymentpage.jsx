// // import React from "react";
// // import { useState } from "react";

// // const Paymentpage = () => {
// //     const [cashOnDelivery, setCashOnDelivery] = useState(false);
   

// //   return (
// //     <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
// //       {/* Left Side: Shipping Form */}
// //       <div className="bg-white p-6 shadow-md rounded-lg">
// //         <h2 className="text-2xl font-semibold mb-4">Shipping Details</h2>
// //         <form className="space-y-4">
// //           <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-md" required />
// //           <input type="text" placeholder="Address" className="w-full p-3 border rounded-md" required />
// //           <input type="text" placeholder="City" className="w-full p-3 border rounded-md" required />
// //           <input type="text" placeholder="Postal Code" className="w-full p-3 border rounded-md" required />
// //           <input type="text" placeholder="Phone Number" className="w-full p-3 border rounded-md" required />
// //         </form>
// //       </div>

// //       {/* Right Side: Payment Section */}
// //       <div className="bg-white p-6 shadow-md rounded-lg">
// //         <h2 className="text-2xl font-semibold mb-4">Payment Method</h2>
// //         <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setCashOnDelivery(!cashOnDelivery)}>
// //           <div
// //             className={`w-6 h-6 border-2 rounded-full flex items-center justify-center transition-all duration-300 ${cashOnDelivery ? "bg-green-500 border-green-500" : "border-gray-400"}`}
// //           >
// //             {cashOnDelivery && <span className="text-white">✔</span>}
// //           </div>
// //           <span className="text-lg">Cash on Delivery</span>
// //         </div>
        
// //         {/* Order Summary */}
// //         <div className="mt-6 p-4 bg-gray-100 rounded-lg">
// //           <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
// //           <p className="flex justify-between text-lg"><span>Subtotal:</span> <span>$499</span></p>
// //           <p className="flex justify-between text-lg"><span>Shipping:</span> <span>$10</span></p>
// //           <hr className="my-2" />
// //           <p className="flex justify-between text-xl font-semibold"><span>Total:</span> <span>$509</span></p>
// //         </div>

// //         {/* Place Order Button */}
// //         <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">Place Order</button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Paymentpage;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { backend } from "../../utils/Constants";

// const Paymentpage = () => {
//   const [cashOnDelivery, setCashOnDelivery] = useState(false);
//   const [cartItems, setCartItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchCartItems = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(`${backend}/api/cart/cart`, {
//         withCredentials: true,
//       });
//       setCartItems(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching cart items:", error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCartItems();
//   }, []);

//   const subtotal = cartItems.reduce(
//     (acc, item) => acc + item?.productId?.price * item.quantity,
//     0
//   );
//   const shipping = subtotal > 0 ? 10 : 0;
//   const total = subtotal + shipping;

//   const handlePlaceOrder = () => {
//     if (cartItems.length === 0) {
//       alert("Your cart is empty.");
//       return;
//     }
//     if (!cashOnDelivery) {
//       alert("Please select a payment method.");
//       return;
//     }

//     // Later: send order to backend
//     alert("Order placed successfully!");
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
//       {/* Left Side: Shipping Form */}
//       <div className="bg-white p-6 shadow-md rounded-lg">
//         <h2 className="text-2xl font-semibold mb-4">Shipping Details</h2>
//         <form className="space-y-4">
//           <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-md" required />
//           <input type="text" placeholder="Address" className="w-full p-3 border rounded-md" required />
//           <input type="text" placeholder="City" className="w-full p-3 border rounded-md" required />
//           <input type="text" placeholder="Postal Code" className="w-full p-3 border rounded-md" required />
//           <input type="text" placeholder="Phone Number" className="w-full p-3 border rounded-md" required />
//         </form>
//       </div>

//       {/* Right Side: Payment Section */}
//       <div className="bg-white p-6 shadow-md rounded-lg">
//         <h2 className="text-2xl font-semibold mb-4">Payment Method</h2>
//         <div
//           className="flex items-center space-x-3 cursor-pointer"
//           onClick={() => setCashOnDelivery(!cashOnDelivery)}
//         >
//           <div
//             className={`w-6 h-6 border-2 rounded-full flex items-center justify-center transition-all duration-300 ${
//               cashOnDelivery ? "bg-green-500 border-green-500" : "border-gray-400"
//             }`}
//           >
//             {cashOnDelivery && <span className="text-white">✔</span>}
//           </div>
//           <span className="text-lg">Cash on Delivery</span>
//         </div>

//         {/* Order Summary */}
//         <div className="mt-6 p-4 bg-gray-100 rounded-lg">
//           <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
//           {loading ? (
//             <p className="text-gray-500">Loading cart...</p>
//           ) : cartItems.length === 0 ? (
//             <p className="text-red-500">Cart is empty.</p>
//           ) : (
//             <>
//               <p className="flex justify-between text-lg">
//                 <span>Subtotal:</span> <span>${subtotal.toFixed(2)}</span>
//               </p>
//               <p className="flex justify-between text-lg">
//                 <span>Shipping:</span> <span>${shipping.toFixed(2)}</span>
//               </p>
//               <hr className="my-2" />
//               <p className="flex justify-between text-xl font-semibold">
//                 <span>Total:</span> <span>${total.toFixed(2)}</span>
//               </p>
//             </>
//           )}
//         </div>

//         {/* Place Order Button */}
//         <button
//           onClick={handlePlaceOrder}
//           disabled={cartItems.length === 0}
//           className={`mt-6 w-full py-3 rounded-lg text-lg font-semibold transition ${
//             cartItems.length === 0
//               ? "bg-gray-400 cursor-not-allowed text-white"
//               : "bg-blue-600 hover:bg-blue-700 text-white"
//           }`}
//         >
//           Place Order
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Paymentpage;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { backend } from "../../utils/Constants";

const Paymentpage = () => {
  const [cashOnDelivery, setCashOnDelivery] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
    phone: ""
  });

  const fetchCartItems = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${backend}/api/cart/cart`, {
        withCredentials: true,
      });
      setCartItems(response.data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item?.productId?.price * item.quantity,
    0
  );
  const shipping = subtotal > 0 ? 10 : 0;
  const total = subtotal + shipping;

  const handlePlaceOrder = async () => {
    if (cartItems.length === 0) return alert("Your cart is empty.");
    if (!cashOnDelivery) return alert("Please select a payment method.");

    const { fullName, address, city, postalCode, phone } = formData;
    if (!fullName || !address || !city || !postalCode || !phone) {
      return alert("Please fill out all shipping details.");
    }

    const shippingAddress = {
      street: address,
      city,
      state: fullName, // you can replace or extend with actual state field
      postalCode,
      country: "India", // static or make it dynamic
    };

    const products = cartItems.map((item) => ({
      productId: item.productId._id,
      quantity: item.quantity,
    }));

    try {
      const response = await axios.post(
        `${backend}/api/order/create`,
        {
          products,
          shippingAddress,
          paymentMethod: "Cash on Delivery",
          price: total,
        },
        { withCredentials: true }
      );
      console.log(response.data)
      alert("Order placed successfully!");
    } catch (error) {
      console.error("Order placement failed:", error);
      alert("Failed to place order. Please try again.");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left Side: Shipping Form */}
      <div className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Shipping Details</h2>
        <form className="space-y-4">
          <input name="fullName" onChange={handleChange} type="text" placeholder="Full Name" className="w-full p-3 border rounded-md" required />
          <input name="address" onChange={handleChange} type="text" placeholder="Address" className="w-full p-3 border rounded-md" required />
          <input name="city" onChange={handleChange} type="text" placeholder="City" className="w-full p-3 border rounded-md" required />
          <input name="postalCode" onChange={handleChange} type="text" placeholder="Postal Code" className="w-full p-3 border rounded-md" required />
          <input name="phone" onChange={handleChange} type="text" placeholder="Phone Number" className="w-full p-3 border rounded-md" required />
        </form>
      </div>

      {/* Right Side: Payment Section */}
      <div className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Payment Method</h2>
        <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => setCashOnDelivery(!cashOnDelivery)}
        >
          <div
            className={`w-6 h-6 border-2 rounded-full flex items-center justify-center transition-all duration-300 ${cashOnDelivery ? "bg-green-500 border-green-500" : "border-gray-400"}`}
          >
            {cashOnDelivery && <span className="text-white">✔</span>}
          </div>
          <span className="text-lg">Cash on Delivery</span>
        </div>

        {/* Order Summary */}
        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
          {loading ? (
            <p className="text-gray-500">Loading cart...</p>
          ) : cartItems.length === 0 ? (
            <p className="text-red-500">Cart is empty.</p>
          ) : (
            <>
              <p className="flex justify-between text-lg">
                <span>Subtotal:</span> <span>${subtotal.toFixed(2)}</span>
              </p>
              <p className="flex justify-between text-lg">
                <span>Shipping:</span> <span>${shipping.toFixed(2)}</span>
              </p>
              <hr className="my-2" />
              <p className="flex justify-between text-xl font-semibold">
                <span>Total:</span> <span>${total.toFixed(2)}</span>
              </p>
            </>
          )}
        </div>

        {/* Place Order Button */}
        <button
          onClick={handlePlaceOrder}
          disabled={cartItems.length === 0}
          className={`mt-6 w-full py-3 rounded-lg text-lg font-semibold transition ${cartItems.length === 0 ? "bg-gray-400 cursor-not-allowed text-white" : "bg-blue-600 hover:bg-blue-700 text-white"}`}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Paymentpage;

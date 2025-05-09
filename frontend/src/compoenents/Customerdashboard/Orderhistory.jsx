// // import React from 'react';

// // const orders = [
// //   { date: '2024-03-10', product: 'Laptop', status: 'Delivered' },
// //   { date: '2024-03-08', product: 'Smartphone', status: 'Shipped' },
// //   { date: '2024-03-06', product: 'Headphones', status: 'Processing' },
// //   { date: '2024-03-04', product: 'Tablet', status: 'Cancelled' },
// // ];

// // const Orderhistory = () => {
// //   return (
// //     <div className="max-w-3xl mx-auto p-6">
// //       <h2 className="text-2xl font-semibold mb-6">Order History</h2>
// //       <div className="flex flex-col gap-4">
// //         {orders.map((order, index) => (
// //           <div key={index} className="bg-white p-4 shadow-md rounded-lg">
// //             <p className="text-gray-500">{order.date}</p>
// //             <h3 className="text-lg font-semibold">{order.product}</h3>
// //             <p className={`text-sm mt-2 ${order.status === 'Delivered' ? 'text-green-600' : order.status === 'Shipped' ? 'text-blue-600' : order.status === 'Processing' ? 'text-yellow-600' : 'text-red-600'}`}>
// //               {order.status}
// //             </p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Orderhistory;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {backend} from '../../utils/Constants'
// const OrderHistory = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchOrders = async () => {
//     try {
//       const response = await axios.get(`${backend}/api/order/myorders`, {
        
//         withCredentials:true
//       });
//       setOrders(response.data.orders);
//     } catch (error) {
//       console.error('Error fetching orders:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'Delivered':
//         return 'text-green-600';
//       case 'Shipped':
//         return 'text-blue-600';
//       case 'Processing':
//       case 'Pending':
//         return 'text-yellow-600';
//       case 'Cancelled':
//         return 'text-red-600';
//       default:
//         return 'text-gray-600';
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h2 className="text-3xl font-bold mb-6">Your Order History</h2>

//       {loading ? (
//         <p className="text-center text-gray-500">Loading orders...</p>
//       ) : orders.length === 0 ? (
//         <p className="text-center text-gray-500">You have no orders yet.</p>
//       ) : (
//         <div className="space-y-4">
//           {orders.map((order) => (
//             <div
//               key={order._id}
//               className="bg-white p-6 shadow-md rounded-lg border border-gray-100"
//             >
//               <div className="flex justify-between items-center mb-2">
//                 <p className="text-gray-500 text-sm">
//                   Ordered on: {new Date(order.createdAt).toLocaleDateString()}
//                 </p>
//                 <p className={`font-medium ${getStatusColor(order.status)}`}>
//                   {order.status}
//                 </p>
//               </div>

//               <div className="space-y-2 mt-2">
//                 {order.products.map((item, idx) => (
//                   <div
//                     key={idx}
//                     className="flex justify-between items-center text-sm"
//                   >
//                     <div className="flex items-center gap-2">
//                       <span className="font-medium">{item.productId?.name || 'Product'}</span>
//                       <span className="text-gray-400">x{item.quantity}</span>
//                     </div>
//                     <span className="text-gray-600">
//                       ₹{item.productId?.price * item.quantity}
//                     </span>
//                   </div>
//                 ))}
//               </div>

//               <div className="text-right mt-4">
//                 <span className="font-semibold">
//                   Total: ₹{order.price}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default OrderHistory;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { backend } from '../../utils/Constants';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${backend}/api/order/myorders`, {
        withCredentials: true,
      });
      setOrders(response.data.orders);
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered':
        return 'text-green-600';
      case 'Shipped':
        return 'text-blue-600';
      case 'Processing':
      case 'Pending':
        return 'text-yellow-600';
      case 'Cancelled':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left">
        Your Order History
      </h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading orders...</p>
      ) : orders.length === 0 ? (
        <p className="text-center text-gray-500">You have no orders yet.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-white p-4 sm:p-6 shadow-md rounded-lg border border-gray-100"
            >
              <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                <p className="text-gray-500 text-sm mb-1 sm:mb-0">
                  Ordered on: {new Date(order.createdAt).toLocaleDateString()}
                </p>
                <p className={`font-medium ${getStatusColor(order.status)}`}>
                  {order.status}
                </p>
              </div>

              <div className="space-y-2 mt-2">
                {order.products.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-wrap justify-between items-center text-sm gap-2"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-medium">{item.productId?.name || 'Product'}</span>
                      <span className="text-gray-400">x{item.quantity}</span>
                    </div>
                    <span className="text-gray-600">
                      ₹{item.productId?.price * item.quantity}
                    </span>
                  </div>
                ))}
              </div>

              <div className="text-right mt-4">
                <span className="font-semibold text-base sm:text-lg">
                  Total: ₹{order.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistory;

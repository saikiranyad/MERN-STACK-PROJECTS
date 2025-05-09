// import { useState } from "react";

// const Orderstatus = () => {
//   const [orders, setOrders] = useState([
//     {
//       id: 1,
//       customerName: "John Doe",
//       address: "123 Main St, Cityville",
//       products: 3,
//       status: "Pending",
//     },
//     {
//       id: 2,
//       customerName: "Jane Smith",
//       address: "456 Elm St, Townsville",
//       products: 5,
//       status: "Shipped",
//     },
//     {
//       id: 3,
//       customerName: "Michael Brown",
//       address: "789 Oak St, Villagetown",
//       products: 2,
//       status: "Delivered",
//     },
//   ]);

//   const handleStatusChange = (id, newStatus) => {
//     const updatedOrders = orders.map((order) =>
//       order.id === id ? { ...order, status: newStatus } : order
//     );
//     setOrders(updatedOrders);
//   };

//   const statusOptions = ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"];

//   return (
//     <div className="p-8 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold mb-6">📦 Order Status Management</h2>
//       <div className="space-y-6">
//         {orders.map((order) => (
//           <div key={order.id} className="flex justify-between items-center border-b pb-4">
//             <div>
//               <p className="text-lg font-semibold">{order.customerName}</p>
//               <p className="text-gray-600">Address: {order.address}</p>
//               <p className="text-gray-600">Products: {order.products}</p>
//             </div>
//             <select
//               value={order.status}
//               onChange={(e) => handleStatusChange(order.id, e.target.value)}
//               className="p-2 border rounded-md"
//             >
//               {statusOptions.map((status) => (
//                 <option key={status} value={status}>
//                   {status}
//                 </option>
//               ))}
//             </select>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Orderstatus;



import { useEffect, useState } from "react";
import axios from "axios";
import {backend} from '../../utils/Constants'

const OrderStatus = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const statusOptions = ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"];

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${backend}/api/order/sellerorderinformation`, {
       
        withCredentials:true
      });
      console.log(response.data)
      setOrders(response.data.orders);
    } catch (error) {
      console.error("Error fetching orders:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      const response = await axios.patch(
        `${backend}/api/order/${orderId}/updatestatus`,
        { status: newStatus },
        { withCredentials:true}
      
      );
console.log(response.data)
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId ? { ...order, status: newStatus } : order
        )
      );
    } catch (error) {
      console.error("Failed to update status:", error.message);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="p-8 bg-white shadow-lg rounded-lg max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">📦 Order Status Management</h2>

      {loading ? (
        <p className="text-gray-500">Loading orders...</p>
      ) : orders.length === 0 ? (
        <p className="text-gray-500">No orders found.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order._id} className="flex justify-between items-start border-b pb-4">
              <div>
                <p className="text-lg font-semibold">
                  {order.userId?.name || "Customer"}
                </p>
                <p className="text-gray-600">Email: {order.userId?.email}</p>
                <p className="text-gray-600">Address: {order.address}</p>
                <p className="text-gray-600">Total Price: ₹{order.price}</p>
                <ul className="text-sm mt-2 text-gray-700 list-disc ml-5">
                  {order.products.map((item, index) => (
                    <li key={index}>
                      {item.productId?.name} × {item.quantity}
                    </li>
                  ))}
                </ul>
              </div>
              <select
                value={order.status}
                onChange={(e) => handleStatusChange(order._id, e.target.value)}
                className="p-2 border rounded-md"
              >
                {statusOptions.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderStatus;


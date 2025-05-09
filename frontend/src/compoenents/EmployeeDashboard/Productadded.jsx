





// // import React from "react";
// // import { Trash2, Edit2 } from "lucide-react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { deleteProduct } from "../../redux/Slices/productSlice";
// // import { Link } from "react-router-dom";

// // const Productadded = () => {
// //   const { products, error, loading } = useSelector((state) => state.product); // Include error and loading
// //   console.log(products);
// //   const dispatch = useDispatch();

// //   const handleDelete = (id) => {
// //     const isConfirmed = window.confirm("Are you sure you want to delete this product?");
// //     if (isConfirmed) {
// //       dispatch(deleteProduct(id));
// //     }
// //   };

// //   const handleUpdate = (id) => {
// //     console.log(`Update product with ID: ${id}`);
// //   };

// //   return (
// //     <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
// //       <h2 className="text-2xl font-bold mb-6">📦 Product Table</h2>

// //       {error && <p className="text-red-500 text-center">{error}</p>} {/* Show error message */}

// //       {products.length === 0 ? (
// //         <p className="text-center text-gray-500 text-lg">🚫 No products available.</p>
// //       ) : (
// //         <table className="w-full border-collapse border border-gray-300">
// //           <thead>
// //             <tr className="bg-gray-100 text-left">
// //               <th className="p-4">S.No</th>
// //               <th className="p-4">Product Image</th>
// //               <th className="p-4">Product Details</th>
// //               <th className="p-4">Type</th>
// //               <th className="p-4">Discount</th>
// //               <th className="p-4">No. of Stocks</th>
// //               <th className="p-4">Stock Left</th>
// //               <th className="p-4">Stock Sold</th>
// //               <th className="p-4">Price</th>
// //               <th className="p-4">Best Seller</th>
// //               <th className="p-4">Action</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {products.map((product, index) => (
// //               <tr key={product._id} className="text-center border-t border-gray-300">
// //                 <td className="p-4">{index + 1}</td>
// //                 <td className="p-4">
// //                   <img
// //                     src={product.images[0]}
// //                     alt={product.name}
// //                     className="w-12 h-12 object-cover"
// //                   />
// //                 </td>
// //                 <td className="p-4">{product.name}</td>
// //                 <td className="p-4">{product.type}</td>
// //                 <td className="p-4">{product.discount}</td>
// //                 <td className="p-4">{product.stock}</td>
// //                 <td className="p-4">{product.stock - product.sold}</td>
// //                 <td className="p-4">{product.sold}</td>
// //                 <td className="p-4">{product.price}</td>
// //                 <td className="p-4">{product.bestSeller ? "✅" : "❌"}</td>
// //                 <td className="p-4 flex gap-4 justify-center">
// //                   <button className="text-blue-500">
// //                     <Link to={`/editproduct/${product._id}`}>
// //                       <Edit2 size={20} />
// //                     </Link>
// //                   </button>
// //                   <button
// //                     onClick={() => handleDelete(product._id)}
// //                     className="text-red-500"
// //                     disabled={loading} // Disable delete button if loading
// //                   >
// //                     {loading ? "Deleting..." : <Trash2 size={20} />}
// //                   </button>
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       )}
// //     </div>
// //   );
// // };

// // export default Productadded;

// import React, { useEffect } from "react";
// import { Trash2, Edit2 } from "lucide-react";
// import { useDispatch, useSelector } from "react-redux";
// import { getUserProducts, deleteProduct } from "../../redux/Slices/productSlice";
// import { Link, useNavigate } from "react-router-dom";

// const Productadded = () => {
//   const navigate = useNavigate()
//   const { userProducts:products, error, loading } = useSelector((state) => state.product);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getUserProducts());
//   }, [dispatch]);

//   const handleDelete = (id) => {
//     const isConfirmed = window.confirm("Are you sure you want to delete this product?");
//     if (isConfirmed) {
//       dispatch(deleteProduct(id));
//       // navigate('/')
//     }
//   };

//   return (
//     <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
//       <h2 className="text-2xl font-bold mb-6">📦 Product Table</h2>

//       {error && <p className="text-red-500 text-center">{error}</p>}

//       {loading ? (
//         <p className="text-center">Loading products...</p>
//       ) : products.length === 0 ? (
//         <p className="text-center text-gray-500 text-lg">🚫 No products available.</p>
//       ) : (
//         <table className="w-full border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-100 text-left">
//               <th className="p-4">S.No</th>
//               <th className="p-4">Product Image</th>
//               <th className="p-4">Product Name</th>
//               <th className="p-4">Type</th>
//               <th className="p-4">Discount</th>
//               {/* <th className="p-4">Stock</th>
//               <th className="p-4">Left</th>
//               <th className="p-4">Sold</th> */}
//               <th className="p-4">Price</th>
//               <th className="p-4">Best Seller</th>
//               <th className="p-4">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.map((product, index) => (
//               <tr key={product._id} className="text-center border-t border-gray-300">
//                 <td className="p-4">{index + 1}</td>
//                 <td className="p-4">
//                   <img
//                     src={product.images[0]}
//                     alt={product.name}
//                     className="w-12 h-12 object-cover rounded"
//                   />
//                 </td>
//                 <td className="p-4">{product.name}</td>
//                 <td className="p-4">{product.type}</td>
//                 <td className="p-4">{product.discount}</td>
//                 {/* <td className="p-4">{product.stock}</td>
//                 <td className="p-4">{product.stock - product.sold}</td>
//                 <td className="p-4">{product.sold}</td> */}
//                 <td className="p-4">₹{product.price}</td>
//                 <td className="p-4">{product.bestSeller ? "✅" : "❌"}</td>
//                 <td className="p-4 flex justify-center gap-4">
//                   <Link to={`/editproduct/${product._id}`} className="text-blue-600">
//                     <Edit2 size={20} />
//                   </Link>
//                   <button
//                     onClick={() => handleDelete(product._id)}
//                     className="text-red-600"
//                     disabled={loading}
//                   >
//                     {loading ? "Deleting..." : <Trash2 size={20} />}
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default Productadded;


import React, { useEffect } from "react";
import { Trash2, Edit2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProducts, deleteProduct } from "../../redux/Slices/productSlice";
import { Link, useNavigate } from "react-router-dom";

const Productadded = () => {
  const navigate = useNavigate();
  const { userProducts: products, error, loading } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProducts());
  }, [dispatch]);

  const handleDelete = (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this product?");
    if (isConfirmed) {
      dispatch(deleteProduct(id));
    }
  };

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">📦 Product Table</h2>

      {error && <p className="text-red-500 text-center">{error}</p>}

      {loading ? (
        <p className="text-center">Loading products...</p>
      ) : products.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">🚫 No products available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-4">S.No</th>
                <th className="p-4">Product Image</th>
                <th className="p-4">Product Name</th>
                <th className="p-4">Type</th>
                <th className="p-4">Discount</th>
                <th className="p-4">Price</th>
                <th className="p-4">Best Seller</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product._id} className="text-center border-t border-gray-300">
                  <td className="p-4">{index + 1}</td>
                  <td className="p-4">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-12 h-12 object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-4">{product.name}</td>
                  <td className="p-4">{product.type}</td>
                  <td className="p-4">{product.discount}</td>
                  <td className="p-4">₹{product.price}</td>
                  <td className="p-4">{product.bestSeller ? "✅" : "❌"}</td>
                  <td className="p-4 flex justify-center gap-4">
                    <Link to={`/editproduct/${product._id}`} className="text-blue-600">
                      <Edit2 size={20} />
                    </Link>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="text-red-600"
                      disabled={loading}
                    >
                      {loading ? "Deleting..." : <Trash2 size={20} />}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Productadded;

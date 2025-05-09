// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { XCircle } from "lucide-react";
// import { useDispatch, useSelector } from "react-redux";
// import { updateProduct } from "../../redux/Slices/productSlice";
// import { useParams } from "react-router-dom";


// const EditProduct = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const { userProducts } = useSelector((state) => state.product);

//   const [productData, setProductData] = useState({
//     name: "",
//     price: "",
//     stock: "",
//     type: "",
//     category: "",
//     subcategory: "",
//     bestSeller: false,
//     discount: "0",
//     description: "",
//     images: [],
//   });

//   const categories = {
//     Clothes: ["Men", "Women", "Kids"],
//     Electronics: ["Laptops", "Mobiles", "Tablets", "Accessories"],
//     Groceries: ["Vegetables", "Cereals", "Dairy", "Snacks"],
//   };

//   useEffect(() => {
//     const product = userProducts.find((p) => p._id === id);
//     if (product) {
//       setProductData({
//         name: product.name || "",
//         price: product.price || "",
//         stock: product.stock || "",
//         type: product.type || "",
//         category: product.category || "",
//         subcategory: product.subcategory || "",
//         bestSeller: product.bestSeller || false,
//         discount: product.discount?.toString() || "0",
//         description: product.description || "",
//         images: product.images || [],
//       });
//     }
//   }, [id, userProducts]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (name === "bestSeller") {
//       setProductData({ ...productData, bestSeller: value === "true" });
//     } else {
//       setProductData({ ...productData, [name]: value });
//     }
//   };

//   const handleImageUpload = (e) => {
//     const files = Array.from(e.target.files);
//     setProductData({ ...productData, images: [...productData.images, ...files] });
//   };

//   const removeImage = (index) => {
//     const updatedImages = productData.images.filter((_, i) => i !== index);
//     setProductData({ ...productData, images: updatedImages });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const { name, price, stock, type, category, description } = productData;
//     if (!name || !price || !stock || !type || !category || !description) {
//       alert("Please fill in all required fields.");
//       return;
//     }

//     dispatch(updateProduct({ id, productData }));
//     alert("✅ Product Updated!");
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.6 }}
//       className="max-w-5xl mx-auto p-10 mt-12 bg-white shadow-2xl rounded-3xl border border-gray-200"
//     >
//       <motion.h1
//         className="text-4xl md:text-5xl font-bold text-center mb-10 text-gray-800"
//         initial={{ y: -20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//       >
//         Edit Your Product
//       </motion.h1>

//       <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <input
//           name="name"
//           placeholder="Product Name"
//           value={productData.name}
//           onChange={handleChange}
//           className="input"
//         />
//         <input
//           name="price"
//           type="number"
//           placeholder="Price"
//           value={productData.price}
//           onChange={handleChange}
//           className="input"
//         />
//         <input
//           name="stock"
//           type="number"
//           placeholder="Stock Quantity"
//           value={productData.stock}
//           onChange={handleChange}
//           className="input"
//         />

//         <select name="type" value={productData.type} onChange={handleChange} className="input">
//           <option value="">Select Type</option>
//           {Object.keys(categories).map((cat) => (
//             <option key={cat} value={cat}>
//               {cat}
//             </option>
//           ))}
//         </select>

//         {productData.type && (
//           <select
//             name="category"
//             value={productData.category}
//             onChange={handleChange}
//             className="input"
//           >
//             <option value="">Select Category</option>
//             {categories[productData.type].map((subcat, idx) => (
//               <option key={idx} value={subcat}>
//                 {subcat}
//               </option>
//             ))}
//           </select>
//         )}

//         <input
//           name="subcategory"
//           placeholder="Subcategory (optional)"
//           value={productData.subcategory}
//           onChange={handleChange}
//           className="input"
//         />

//         <select
//           name="bestSeller"
//           value={productData.bestSeller}
//           onChange={handleChange}
//           className="input"
//         >
//           <option value="">Best Seller?</option>
//           <option value="true">Yes</option>
//           <option value="false">No</option>
//         </select>

//         <select name="discount" value={productData.discount} onChange={handleChange} className="input">
//           {[0, 10, 20, 30, 50].map((d) => (
//             <option key={d} value={d}>{d}% Discount</option>
//           ))}
//         </select>

//         <textarea
//           name="description"
//           value={productData.description}
//           onChange={handleChange}
//           placeholder="Product Description"
//           rows={4}
//           className="input col-span-1 md:col-span-2 resize-none"
//         ></textarea>

//         <input
//           type="file"
//           multiple
//           accept="image/*"
//           onChange={handleImageUpload}
//           className="input col-span-1 md:col-span-2"
//         />

//         <div className="flex flex-wrap gap-4 col-span-1 md:col-span-2 mt-4">
//           {productData.images.map((img, i) => {
//             const imageUrl = img instanceof File ? URL.createObjectURL(img) : img;
//             return (
//               <div key={i} className="relative w-24 h-24">
//                 <img
//                   src={imageUrl}
//                   className="object-cover w-full h-full rounded-xl border shadow"
//                   alt={`product-${i}`}
//                 />
//                 <button
//                   onClick={() => removeImage(i)}
//                   type="button"
//                   className="absolute -top-2 -right-2 bg-red-600 text-white p-1 rounded-full"
//                 >
//                   <XCircle size={18} />
//                 </button>
//               </div>
//             );
//           })}
//         </div>

//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           type="submit"
//           className="col-span-1 md:col-span-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-xl"
//         >
//           🚀 Update Product
//         </motion.button>
//       </form>

//       <style jsx>{`
//         .input {
//           @apply w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm;
//         }
//       `}</style>
//     </motion.div>
//   );
// };

// export default EditProduct;





import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { XCircle } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../redux/Slices/productSlice";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { userProducts } = useSelector((state) => state.product);

  const [productData, setProductData] = useState({
    name: "",
    price: "",
    stock: "",
    type: "",
    category: "",
    subcategory: "",
    bestSeller: false,
    discount: "0",
    description: "",
    images: [],
  });

  const [loading, setLoading] = useState(true);

  const categories = {
    Clothes: ["Men", "Women", "Kids"],
    Electronics: ["Laptops", "Mobiles", "Tablets", "Accessories"],
    Groceries: ["Vegetables", "Cereals", "Dairy", "Snacks"],
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const product = userProducts.find((p) => p._id === id);
    if (product) {
      setProductData({
        name: product.name || "",
        price: product.price || "",
        stock: product.stock || "",
        type: product.type || "",
        category: product.category || "",
        subcategory: product.subcategory || "",
        bestSeller: product.bestSeller || false,
        discount: product.discount?.toString() || "0",
        description: product.description || "",
        images: product.images || [],
      });
    }
    setLoading(false);
  }, [id, userProducts]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "bestSeller") {
      setProductData({ ...productData, bestSeller: value === "true" });
    } else {
      setProductData({ ...productData, [name]: value });
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setProductData({ ...productData, images: [...productData.images, ...files] });
  };

  const removeImage = (index) => {
    const updatedImages = productData.images.filter((_, i) => i !== index);
    setProductData({ ...productData, images: updatedImages });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, price, stock, type, category, description } = productData;
    if (!name || !price || !stock || !type || !category || !description) {
      alert("Please fill in all required fields.");
      return;
    }
    dispatch(updateProduct({ id, productData }));
    alert("✅ Product Updated!");
  };

  if (loading) return <div className="text-center py-20">Loading...</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto p-4 sm:p-6 md:p-10 mt-6 sm:mt-12 bg-white shadow-2xl rounded-3xl border border-gray-200"
    >
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-10 text-gray-800"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Edit Your Product
      </motion.h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          name="name"
          placeholder="Product Name"
          value={productData.name}
          onChange={handleChange}
          className="input"
        />
        <input
          name="price"
          type="number"
          placeholder="Price"
          value={productData.price}
          onChange={handleChange}
          className="input"
        />
        <input
          name="stock"
          type="number"
          placeholder="Stock Quantity"
          value={productData.stock}
          onChange={handleChange}
          className="input"
        />

        <select name="type" value={productData.type} onChange={handleChange} className="input">
          <option value="">Select Type</option>
          {Object.keys(categories).map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {productData.type && (
          <select
            name="category"
            value={productData.category}
            onChange={handleChange}
            className="input"
          >
            <option value="">Select Category</option>
            {categories[productData.type].map((subcat, idx) => (
              <option key={idx} value={subcat}>
                {subcat}
              </option>
            ))}
          </select>
        )}

        <input
          name="subcategory"
          placeholder="Subcategory (optional)"
          value={productData.subcategory}
          onChange={handleChange}
          className="input"
        />

        <select
          name="bestSeller"
          value={productData.bestSeller ? "true" : "false"}
          onChange={handleChange}
          className="input"
        >
          <option value="">Best Seller?</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>

        <select
          name="discount"
          value={productData.discount}
          onChange={handleChange}
          className="input"
        >
          {[0, 10, 20, 30, 50].map((d) => (
            <option key={d} value={d}>
              {d}% Discount
            </option>
          ))}
        </select>

        <textarea
          name="description"
          value={productData.description}
          onChange={handleChange}
          placeholder="Product Description"
          rows={4}
          className="input col-span-1 md:col-span-2 resize-none"
        ></textarea>

        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageUpload}
          className="input col-span-1 md:col-span-2"
        />

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 col-span-1 md:col-span-2 mt-4">
          {productData.images.map((img, i) => {
            const imageUrl = img instanceof File ? URL.createObjectURL(img) : img;
            return (
              <div key={i} className="relative w-full aspect-square">
                <img
                  src={imageUrl}
                  className="object-cover w-full h-full rounded-xl border shadow"
                  alt={`product-${i}`}
                />
                <button
                  onClick={() => removeImage(i)}
                  type="button"
                  className="absolute -top-2 -right-2 bg-red-600 text-white p-1 rounded-full"
                >
                  <XCircle size={18} />
                </button>
              </div>
            );
          })}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="col-span-1 md:col-span-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-xl"
        >
          🚀 Update Product
        </motion.button>
      </form>

      <style jsx>{`
        .input {
          @apply w-full p-3 text-base border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm;
        }
      `}</style>
    </motion.div>
  );
};

export default EditProduct;

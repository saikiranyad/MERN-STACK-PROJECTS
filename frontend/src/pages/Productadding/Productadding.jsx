
import { useState } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { XCircle } from "lucide-react";
import { addProduct } from "../../redux/Slices/productSlice"; // adjust path if needed

const ProductAdding = () => {
  const dispatch = useDispatch();

  const [productData, setProductData] = useState({
    name: "",
    price: "",
    stock: "",
    type: "",
    category: "",
    subcategory: "",
    bestSeller: "",
    discount: "0",
    description: "",
    images: []
  });

  const categories = {
    Clothes: ["Men", "Women", "Kids"],
    Electronics: ["Laptops", "Mobiles", "Headphones", "Accessories"],
    Groceries: ["Vegetables", "Cereals", "Dairy", "Snacks"]
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
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

    dispatch(addProduct(productData))
      .unwrap()
      .then(() => {
        alert("Product Added Successfully!");
        setProductData({
          name: "",
          price: "",
          stock: "",
          type: "",
          category: "",
          subcategory: "",
          bestSeller: "",
          discount: "0",
          description: "",
          images: []
        });
      })
      .catch((err) => {
        alert("Failed to add product: " + err?.message || "Unknown error");
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="max-w-5xl mx-auto p-12 bg-gradient-to-br from-[#f1f2f6] to-[#dfe4ea] shadow-2xl rounded-3xl mt-10 border border-gray-200"
    >
      <motion.h2
        className="text-6xl font-extrabold text-center text-gray-800 mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Add Your Product
      </motion.h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <input type="text" name="name" placeholder="Product Name" value={productData.name} onChange={handleChange} className="input-field" />
        <input type="number" name="price" placeholder="Price" value={productData.price} onChange={handleChange} className="input-field" />
        <input type="number" name="stock" placeholder="Stock Quantity" value={productData.stock} onChange={handleChange} className="input-field" />

        <select name="type" value={productData.type} onChange={handleChange} className="input-field">
          <option value="">Select Type</option>
          {Object.keys(categories).map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>

        {productData.type && (
          <select name="category" value={productData.category} onChange={handleChange} className="input-field">
            <option value="">Select Category</option>
            {categories[productData.type].map((item, index) => (
              <option key={index} value={item}>{item}</option>
            ))}
          </select>
        )}

        <input type="text" name="subcategory" placeholder="Subcategory (Optional)" value={productData.subcategory} onChange={handleChange} className="input-field" />
        <select name="bestSeller" value={productData.bestSeller} onChange={handleChange} className="input-field">
          <option value="">Best Seller</option>
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>

        <select name="discount" value={productData.discount} onChange={handleChange} className="input-field">
          {[0, 10, 20, 30, 50].map((d) => (
            <option key={d} value={d}>{d}% Discount</option>
          ))}
        </select>

        <textarea name="description" placeholder="Product Description" value={productData.description} onChange={handleChange} className="input-field col-span-2" rows="4"></textarea>

        <input type="file" multiple accept="image/*" onChange={handleImageUpload} className="input-field col-span-2" />

        <div className="flex flex-wrap gap-4 mt-4 col-span-2">
          {productData.images.map((image, index) => (
            <div key={index} className="relative w-28 h-28">
              <img src={URL.createObjectURL(image)} alt={`preview-${index}`} className="w-full h-full object-cover rounded-lg shadow-md" />
              <button type="button" onClick={() => removeImage(index)} className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1">
                <XCircle size={18} />
              </button>
            </div>
          ))}
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-r from-[#6a11cb] to-[#2575fc] text-white py-3 px-8 rounded-2xl col-span-2 text-lg font-semibold"
        >
          🚀 Add Product
        </motion.button>
      </form>

      <style jsx>{`
        .input-field {
          @apply w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm;
        }
      `}</style>
    </motion.div>
  );
};

export default ProductAdding;

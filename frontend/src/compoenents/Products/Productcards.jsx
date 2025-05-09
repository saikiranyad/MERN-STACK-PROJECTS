// import { useState } from "react";

// const ProductList = () => {
//   const products = [
//     { id: 1, name: "Laptop", price: 999, category: "Electronics", image: "https://cdn.mos.cms.futurecdn.net/A4h9B6Rw4DkRh2XHP4cQtZ-1280-80.jpg" },
//     { id: 2, name: "Smartphone", price: 499, category: "Electronics", image: "https://contentstatic.techgig.com/thumb/msid-109690363,width-800,resizemode-4/Top-6-smartphones-to-launch-in-May-2024.jpg?44244" },
//     { id: 3, name: "Headphones", price: 199, category: "Electronics", image: "https://cdn.thewirecutter.com/wp-content/media/2023/07/bluetoothheadphones-2048px-0876.jpg" },
//     { id: 4, name: "Smartwatch", price: 299, category: "Electronics", image: "https://istarmax.com/wp-content/uploads/2024/01/GTS7-and-GTS7-Pro-Smart-Watch-Overview-1024x578.webp" },
//     { id: 5, name: "Sofa", price: 799, category: "Home Decor", image: "https://www.orangetree.in/cdn/shop/files/Gallery-1ChiyoL-ShapedSofaBuyOnline.jpg?v=1722852692" },
//     { id: 6, name: "T-shirt", price: 29, category: "Clothing", image: "https://5.imimg.com/data5/SELLER/Default/2022/6/UQ/BI/FF/31943666/mens-tshirt.jpeg" },
//     { id: 7, name: "Dining Table", price: 599, category: "Home Decor", image: "https://www.nismaayadecor.in/cdn/shop/products/12120.jpg?v=1674117163&width=1080" },
//     { id: 8, name: "Apple", price: 5, category: "Groceries", image: "https://hips.hearstapps.com/hmg-prod/images/apples-at-farmers-market-royalty-free-image-1627321463.jpg?crop=0.796xw:1.00xh;0.103xw,0&resize=1200:*" },
//     { id: 9, name: "Jeans", price: 59, category: "Clothing", image: "https://hips.hearstapps.com/hmg-prod/images/mhl-052324-jean-opener-2076-66acf6900d29d.jpg?crop=0.6668889629876625xw:1xh;center,top&resize=1200:*" },
//   ];

//   const [sort, setSort] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 6;

//   const filteredProducts =
//     selectedCategory === "All"
//       ? products
//       : products.filter((product) => product.category === selectedCategory);

//   const sortedProducts = [...filteredProducts].sort((a, b) => {
//     if (sort === "price-asc") return a.price - b.price;
//     if (sort === "price-desc") return b.price - a.price;
//     return 0;
//   });

//   const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
//   const currentProducts = sortedProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

//   return (
//     <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto p-4">
//       {/* Sidebar */}
//       <div className="w-full md:w-1/4 bg-white shadow-lg rounded-lg p-5 border border-gray-200">
//         <h3 className="text-xl font-semibold mb-4">Filter by Category</h3>
//         <div className="space-y-3">
//           {["All", "Clothing", "Electronics", "Home Decor", "Groceries"].map((category) => (
//             <label key={category} className="flex items-center space-x-2 cursor-pointer">
//               <input
//                 type="radio"
//                 name="category"
//                 value={category}
//                 checked={selectedCategory === category}
//                 onChange={() => {
//                   setSelectedCategory(category);
//                   setCurrentPage(1);
//                 }}
//                 className="accent-blue-600"
//               />
//               <span className="text-gray-700 text-lg">{category}</span>
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="w-full md:w-3/4">
//         {/* Sorting Dropdown */}
//         <div className="flex justify-between items-center mb-5">
//           <h2 className="text-2xl font-semibold">Products</h2>
//           <select
//             value={sort}
//             onChange={(e) => {
//               setSort(e.target.value);
//               setCurrentPage(1);
//             }}
//             className="p-2 border rounded-lg bg-white shadow-md text-gray-700"
//           >
//             <option value="">Sort by</option>
//             <option value="price-asc">Price: Low to High</option>
//             <option value="price-desc">Price: High to Low</option>
//           </select>
//         </div>

//         {/* Product Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
//           {currentProducts.length > 0 ? (
//             currentProducts.map((product) => (
//               <div key={product.id} className="border p-4 rounded-lg shadow-md bg-white hover:shadow-xl transition">
//                 <img src={product.image} alt={product.name} className="w-full h-66 object-contain rounded-md mb-3" />
//                 <p className="font-semibold text-lg text-gray-800">{product.name}</p>
//                 <p className="text-blue-600 font-medium text-lg">${product.price}</p>
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-gray-500 col-span-full">No products found.</p>
//           )}
//         </div>

//         {/* Pagination */}
//         {totalPages > 1 && (
//           <div className="flex justify-center mt-8 space-x-3">
//             {[...Array(totalPages)].map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentPage(index + 1)}
//                 className={`px-4 py-2 text-lg font-medium rounded-lg transition-colors ${
//                   currentPage === index + 1 ? "bg-blue-600 text-white" : "bg-gray-300 hover:bg-gray-400"
//                 }`}
//               >
//                 {index + 1}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductList;



import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/Slices/productSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'; // Import Swiper styles
import { Link } from "react-router-dom";

const ProductList = () => {
  const dispatch = useDispatch();
  const { allProducts } = useSelector((state) => state.product);

  const [sort, setSort] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // for mobile sidebar toggle
  const itemsPerPage = 6;

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  // Extract unique categories from products
  const categories = ["All", ...new Set(allProducts.map((p) => p.type))];

  // Filter by category
  const filteredProducts = selectedCategory === "All"
    ? allProducts
    : allProducts.filter((product) => product.type === selectedCategory);

  // Sort by price
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    return 0;
  });

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const currentProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleAddToCart = (product) => {
    // Implement add to cart logic here
    console.log("Added to cart:", product);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto p-4">
      {/* Sidebar */}
      <div className={`w-full md:w-1/4 bg-white shadow-lg rounded-lg p-5 border border-gray-200 ${isSidebarOpen ? 'block' : 'hidden'} md:block`}>
        <h3 className="text-xl font-semibold mb-4">Filter by Category</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <label key={category} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
                className="accent-blue-600"
              />
              <span className="text-gray-700 text-lg">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Mobile Sidebar Toggle Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden p-2 bg-blue-600 text-white rounded-lg mb-4"
      >
        {isSidebarOpen ? 'Close' : 'Filter'}
      </button>

      {/* Main Content */}
      <div className="w-full md:w-3/4">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-semibold">Products</h2>
          <select
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
              setCurrentPage(1);
            }}
            className="p-2 border rounded-lg bg-white shadow-md text-gray-700"
          >
            <option value="">Sort by</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <div
                key={product._id}
                className="border p-4 rounded-lg shadow-md bg-white hover:shadow-xl transition-transform transform hover:scale-105"
              >
                {/* Swiper for Images */}
                <Swiper
                  spaceBetween={10}
                  slidesPerView={1}
                  navigation
                  loop
                  autoplay={{ delay: 3000 }}
                  className="mb-3"
                >
                  {product.images?.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={image || "https://via.placeholder.com/150"}
                        alt={product.name}
                        className="w-full h-66 object-contain rounded-md"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                <p className="font-semibold text-lg text-gray-800">{product.name}</p>
                <p className="text-blue-600 font-medium text-lg">${product.price}</p>

                {/* Product Description */}
                <Link to={`/productdescription/${product._id}`}>
                  {product.description.slice(0,6)}
                </Link>

                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(product)}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">No products found.</p>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-6 flex justify-center space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 border rounded-lg ${currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-white text-gray-800"}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;







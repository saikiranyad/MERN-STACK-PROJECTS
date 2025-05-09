



// import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getAllProducts } from "../../redux/Slices/productSlice"; // Adjust the import based on your file structure

// const Clothscards = () => {
//   const dispatch = useDispatch();
//   const { allProducts, loading } = useSelector((state) => state.product); // Use allProducts from Redux store

//   const [sort, setSort] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [showDescription, setShowDescription] = useState(false); // Track description visibility
//   const [currentImageIndex, setCurrentImageIndex] = useState(0); // For swiping through images
//   const itemsPerPage = 6;

//   // Fetch all products when the component mounts
//   useEffect(() => {
//     dispatch(getAllProducts());
//   }, [dispatch]);

//   // Filter products based on the selected category and type ("Clothes")
//   const filteredProducts =
//     selectedCategory === "All"
//       ? allProducts.filter((product) => product.type === "Clothes") // Filter based on type "Clothes"
//       : allProducts.filter(
//           (product) => product.type === "Clothes" && product.category === selectedCategory
//         );

//   const sortedProducts = [...filteredProducts].sort((a, b) => {
//     if (sort === "price-asc") return a.price - b.price;
//     if (sort === "price-desc") return b.price - a.price;
//     return 0;
//   });

//   const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
//   const currentProducts = sortedProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

//   const handleImageSwipe = (direction) => {
//     if (direction === "next") {
//       setCurrentImageIndex((prevIndex) =>
//         prevIndex === allProducts[currentPage - 1].images.length - 1 ? 0 : prevIndex + 1
//       );
//     } else {
//       setCurrentImageIndex((prevIndex) =>
//         prevIndex === 0 ? allProducts[currentPage - 1].images.length - 1 : prevIndex - 1
//       );
//     }
//   };

//   return (
//     <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto p-4">
//       {/* Sidebar */}
//       <div className="w-full md:w-1/4 bg-white shadow-lg rounded-lg p-5 border border-gray-200">
//         <h3 className="text-xl font-semibold mb-4">Filter by Category</h3>
//         <div className="space-y-3">
//           {["All", "Women", "Men", "Kids"].map((category) => ( // Example categories
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
//           {loading ? (
//             <p className="text-center text-gray-500 col-span-full">Loading products...</p>
//           ) : currentProducts.length > 0 ? (
//             currentProducts.map((product) => (
//               <div key={product._id} className="border p-4 rounded-lg shadow-md bg-white hover:shadow-xl transition">
//                 {/* Swipeable Image */}
//                 <div className="relative w-full h-44">
//                   <img
//                     src={product.images[currentImageIndex]}
//                     alt={product.name}
//                     className="w-full h-full object-cover rounded-md"
//                   />
//                   <button
//                     onClick={() => handleImageSwipe("prev")}
//                     className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
//                   >
//                     &#10094;
//                   </button>
//                   <button
//                     onClick={() => handleImageSwipe("next")}
//                     className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
//                   >
//                     &#10095;
//                   </button>
//                 </div>

//                 <p className="font-semibold text-lg text-gray-800">{product.name}</p>
//                 <p className="text-blue-600 font-medium text-lg">${product.price}</p>
                
//                 {/* Description Button */}
//                 <button
//                   onClick={() => setShowDescription((prev) => !prev)}
//                   className="text-sm text-blue-600 mt-2"
//                 >
//                   {showDescription ? "Hide Description" : "Show Description"}
//                 </button>

//                 {/* Description */}
//                 {showDescription && (
//                   <p className="text-gray-600 text-sm mt-2">{product.description.slice(0, 100)}...</p>
//                 )}

//                 {/* Add to Cart Button */}
//                 <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
//                   Add to Cart
//                 </button>
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

// export default Clothscards;




import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../../redux/Slices/productSlice"; // Adjust the import based on your file structure
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'; // Import Swiper styles
import { Link } from "react-router-dom";

const Clothscards = () => {
  const dispatch = useDispatch();
  const { allProducts, loading } = useSelector((state) => state.product); // Use allProducts from Redux store

  const [sort, setSort] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [showDescription, setShowDescription] = useState(false); // Track description visibility
  const itemsPerPage = 6;

  // Fetch all products when the component mounts
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  // Filter products based on the selected category and type ("Clothes")
  const filteredProducts =
    selectedCategory === "All"
      ? allProducts.filter((product) => product.type === "Clothes") // Filter based on type "Clothes"
      : allProducts.filter(
          (product) => product.type === "Clothes" && product.category === selectedCategory
        );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    return 0;
  });

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const currentProducts = sortedProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto p-4">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 bg-white shadow-lg rounded-lg p-5 border border-gray-200">
        <h3 className="text-xl font-semibold mb-4">Filter by Category</h3>
        <div className="space-y-3">
          {["All", "Women", "Men", "Kids"].map((category) => ( // Example categories
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

      {/* Main Content */}
      <div className="w-full md:w-3/4">
        {/* Sorting Dropdown */}
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
          {loading ? (
            <p className="text-center text-gray-500 col-span-full">Loading products...</p>
          ) : currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <div key={product._id} className="border p-4 rounded-lg shadow-md bg-white hover:shadow-xl transition">
                {/* Swipeable Image Carousel */}
                <Swiper
                  spaceBetween={10} // Space between slides
                  slidesPerView={1} // Show one image at a time
                  navigation={true} // Enables next/prev buttons
                  pagination={{ clickable: true }} // Pagination dots
                  loop={true} // Infinite loop when you reach the last image
                  className="mb-4"
                >
                  {product.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={image}
                        alt={product.name}
                        className="w-full h-44 object-contain rounded-md"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                <p className="font-semibold text-lg text-gray-800">{product.name}</p>
                <p className="text-blue-600 font-medium text-lg">${product.price}</p>

                {/* Description Button */}
                <button
                  onClick={() => setShowDescription((prev) => !prev)}
                  className="text-sm text-blue-600 mt-2"
                >
                  {showDescription ? "Hide Description" : "Show Description"}
                </button>

                {/* Description */}
                {showDescription && (
                  <p className="text-gray-600 text-sm mt-2"><Link to={`/productdescription/${product._id}`}> {product.description.slice(0, 100)}...</Link></p>
                )}

                {/* Add to Cart Button */}
                <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
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
          <div className="flex justify-center mt-8 space-x-3">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 text-lg font-medium rounded-lg transition-colors ${
                  currentPage === index + 1 ? "bg-blue-600 text-white" : "bg-gray-300 hover:bg-gray-400"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Clothscards;







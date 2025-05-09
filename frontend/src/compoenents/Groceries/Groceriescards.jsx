// import { useState } from "react";

// const Groceriescards = () => {
//   const products = [
//     { id: 1, name: "Onion", price: 999, category: "Vegetables", image: "https://images.onlymyhealth.com/imported/images/2023/September/22_Sep_2023/Main-onion.jpg" },
//     { id: 2, name: "Tomato", price: 499, category: "Vegetables", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm-6QVkNbO5SKS1InuN3riDYtExHP5G1y2qw&s" },
//     { id: 3, name: "Chillis", price: 199, category: "Vegetables", image: "https://fruitboxco.com/cdn/shop/products/VG-CL-20_800x.jpg?v=1588920882" },
//     { id: 4, name: "Ground nut", price: 299, category: "Nuts", image: "https://farmfreshbangalore.com/cdn/shop/products/ProductImage_7_a32f3791-da99-44d7-b6bd-b4d3c4f90395.jpg?v=1677952249" },
//     { id: 5, name: "cashews", price: 799, category: "Nuts", image: "https://gourmetgarden.in/cdn/shop/products/Classic_Cashews-100_7d2c8f23-6dde-49e0-a433-c4fe3fd3aa4e_1280x.jpg?v=1740194802" },
//     { id: 6, name: "Jowhar", price: 29, category: "cearls", image: "https://www.hopscotch.in/blog/wp-content/uploads/2020/01/Jowar.jpg" },
//     { id: 7, name: "Bajra", price: 599, category: "Cearls", image: "https://vibrantliving.in/cdn/shop/files/BajraMillet_Sajjalu.png?v=1731059068&width=2048" },
//     { id: 8, name: "Apple", price: 5, category: "Fruits", image: "https://hips.hearstapps.com/hmg-prod/images/apples-at-farmers-market-royalty-free-image-1627321463.jpg?crop=0.796xw:1.00xh;0.103xw,0&resize=1200:*" },
//     { id: 9, name: "Banana", price: 59, category: "Fruits", image: "https://www.jiomart.com/images/product/original/590000454/banana-robusta-1-kg-product-images-o590000454-p590000454-0-202410011654.jpg?im=Resize=(420,420)" },
//     { id: 8, name: "Pepsi", price: 5, category: "Drinks", image: "https://www.britvic.com/media/dexpeq1a/pepsi-max-britvic.jpg?rxy=0.5002748581597487,0.50890699280567031&width=1200&height=600&v=1da47e3fc42b770" },
//     { id: 9, name: "Campa Cola", price: 59, category: "Drinks", image: "https://www.newsx.com/wp-content/uploads/2024/10/IMG_4747.webp" },
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
//           {["All", "Vegetables", "Nuts", "cearls", "Fruits","drinks"].map((category) => (
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
//                 <img src={product.image} alt={product.name} className="w-full h-44 object-contain rounded-md mb-3" />
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

// export default Groceriescards;






import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../../redux/Slices/productSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";

const Groceriescards = () => {
  const dispatch = useDispatch();
  const { allProducts, loading } = useSelector((state) => state.product);

  const [sort, setSort] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [descriptionVisible, setDescriptionVisible] = useState({});
  const itemsPerPage = 6;

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const filteredProducts =
    selectedCategory === "All"
      ? allProducts.filter((product) => product.type === "Groceries")
      : allProducts.filter(
          (product) =>
            product.type === "Groceries" &&
            product.category === selectedCategory
        );

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

  return (
    <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto p-4">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 bg-white shadow-lg rounded-lg p-4 border border-gray-200">
        <h3 className="text-xl font-semibold mb-4">Filter by Category</h3>
        <div className="space-y-3">
          {["All", "Vegetables", "Cereals", "Dairy", "Snacks"].map(
            (category) => (
              <label
                key={category}
                className="flex items-center space-x-2 cursor-pointer"
              >
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
                <span className="text-gray-700 text-base">{category}</span>
              </label>
            )
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full lg:w-3/4">
        {/* Sorting */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-5">
          <h2 className="text-xl sm:text-2xl font-semibold">Products</h2>
          <select
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
              setCurrentPage(1);
            }}
            className="p-2 border rounded-lg bg-white shadow-sm text-gray-700"
          >
            <option value="">Sort by</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {loading ? (
            <p className="text-center text-gray-500 col-span-full">
              Loading products...
            </p>
          ) : currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <div
                key={product._id}
                className="border p-4 rounded-lg shadow-md bg-white hover:shadow-xl transition"
              >
                {/* Swiper Images */}
                <Swiper
                  spaceBetween={10}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  loop={true}
                  className="mb-3"
                >
                  {product.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={image}
                        alt={product.name}
                        className="w-full h-40 object-contain rounded-md"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                <p className="font-semibold text-base sm:text-lg text-gray-800">
                  {product.name}
                </p>
                <p className="text-blue-600 font-medium text-base sm:text-lg">
                  ${product.price}
                </p>

                {/* Description Toggle */}
                <button
                  onClick={() =>
                    setDescriptionVisible((prev) => ({
                      ...prev,
                      [product._id]: !prev[product._id],
                    }))
                  }
                  className="text-sm text-blue-600 mt-2"
                >
                  {descriptionVisible[product._id]
                    ? "Hide Description"
                    : "Show Description"}
                </button>

                {descriptionVisible[product._id] && (
                  <p className="text-gray-600 text-sm mt-2">
                    <Link to={`/productdescription/${product._id}`}> {product.description.slice(0, 100)}...</Link>
                  </p>
                )}

                <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No products found.
            </p>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex flex-wrap justify-center mt-8 space-x-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 text-base rounded-md font-medium transition-colors ${
                  currentPage === index + 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
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

export default Groceriescards;




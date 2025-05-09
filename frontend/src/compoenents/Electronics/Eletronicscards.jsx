// import { useState } from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// const Eletronicscards = () => {
//   const { products } = useSelector(state => state.product)
//   const electronicsProducts = products.filter(product => product.type === "Electronics");
//   console.log(electronicsProducts);

//   // const products = [
//   //   { id: 1, name: "Asus", price: 999, category: "Laptops", image: "https://cdn.mos.cms.futurecdn.net/A4h9B6Rw4DkRh2XHP4cQtZ-1280-80.jpg" },
//   //   { id: 2, name: "Iphone", price: 499, category: "Phones", image: "https://contentstatic.techgig.com/thumb/msid-109690363,width-800,resizemode-4/Top-6-smartphones-to-launch-in-May-2024.jpg?44244" },
//   //   { id: 3, name: "Headphones", price: 199, category: "ear phones", image: "https://cdn.thewirecutter.com/wp-content/media/2023/07/bluetoothheadphones-2048px-0876.jpg" },
//   //   { id: 4, name: "Smartwatch", price: 299, category: "watches", image: "https://istarmax.com/wp-content/uploads/2024/01/GTS7-and-GTS7-Pro-Smart-Watch-Overview-1024x578.webp" },
//   //   { id: 5, name: "Gaming Mouse", price: "$79",category:"Pc", image: "https://rukminim2.flixcart.com/image/850/1000/kxnl6kw0/mouse/5/8/m/wireless-gaming-mouse-rechargeable-500-mah-battery-upto-3200-dpi-original-imaga2da9yxvenhc.jpeg?q=90&crop=false" },
//   //   { id: 6, name: "Mechanical Keyboard", price: "$129",category:"Pc", image: "https://redragon.in/cdn/shop/files/1_f62875f0-d24b-41de-ae7a-af5600758dd2.png?v=1737029200" },
//   //   { id: 7, name: "Apple Vision", price: 599, category: "Pc", image: "https://www.belkin.com/dw/image/v2/BGBH_PRD/on/demandware.static/-/Sites-master-product-catalog-blk/default/dwae5db134/images/hi-res/5/5e37d7c255e23903_ita003jq-gq-apple-vision-pro-strap-web-gal-shot-11-us.jpg?sw=700&sh=700&sm=fit&sfrm=png" },
//   //   { id: 8, name: "Philips Fans", price: 5, category: "Fans", image: "https://i.vimeocdn.com/video/1915463719-37ef787934743ee7acabae6dd7b1216704e4e979b1f7e1cf7939a0bc913ad4ec-d?f=webp" },
//   //   { id: 9, name: "Sencor Television", price: 59, category: "Television", image: "https://www.sencor.com/getmedia/dc08acc4-a220-48fc-9720-6b24e07c21b9/35059649.jpg.aspx?width=2100&height=2100&ext=.jpg" },
//   // ];

//   const [sort, setSort] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 6;

//   const filteredProducts =
//     selectedCategory === "All"
//       ? electronicsProducts
//       : electronicsProducts.filter((product) => product.category === selectedCategory);

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
//           {["All", "Phones", "Laptops", "watches", "Television", "Pc", "ear phones", "Fans","Tablets"].map((category) => (
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
//                 <img src={product.images[0]} alt={product.name} className="w-full h-44 object-cover rounded-md mb-3" />
//                 <p className="font-semibold text-lg text-gray-800">{product.name}</p>
//                 <p className="text-blue-600 font-medium text-lg">${product.price}</p>
//                 <div className="flex justify-between gap-4 mt-4">
//                   <button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 rounded-lg hover:scale-105 transition-transform">
//                     Add to Cart
//                   </button>
//                   <button className="w-full bg-gradient-to-r from-gray-600 to-gray-800 text-white py-2 rounded-lg hover:scale-105 transition-transform">
//                     <Link to={`/productdescription/${product._id}`}>Description</Link>
//                   </button>
//                 </div>

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
//                 className={`px-4 py-2 text-lg font-medium rounded-lg transition-colors ${currentPage === index + 1 ? "bg-blue-600 text-white" : "bg-gray-300 hover:bg-gray-400"
//                   }`}
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

// export default Eletronicscards;







// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import { addToCart } from "../../redux/Slices/cartSlice"; // Import the addToCart action

// const Eletronicscards = () => {
//   const dispatch = useDispatch();
//   const { products } = useSelector(state => state.product);
//   const {carts} = useSelector(state=>state.cart) 
//   console.log(carts)
//   const electronicsProducts = products.filter(product => product.type === "Electronics");

//   const [sort, setSort] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 6;

//   const filteredProducts =
//     selectedCategory === "All"
//       ? electronicsProducts
//       : electronicsProducts.filter((product) => product.category === selectedCategory);

//   const sortedProducts = [...filteredProducts].sort((a, b) => {
//     if (sort === "price-asc") return a.price - b.price;
//     if (sort === "price-desc") return b.price - a.price;
//     return 0;
//   });

//   const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
//   const currentProducts = sortedProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

//   const handleAddToCart = (product) => {
//     dispatch(addToCart(product));
//   };

//   return (
//     <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto p-4">
//       <div className="w-full md:w-1/4 bg-white shadow-lg rounded-lg p-5 border border-gray-200">
//         <h3 className="text-xl font-semibold mb-4">Filter by Category</h3>
//         <div className="space-y-3">
//           {["All", "Phones", "Laptops", "watches", "Television", "Pc", "ear phones", "Fans", "Tablets"].map((category) => (
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

//       <div className="w-full md:w-3/4">
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

//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
//           {currentProducts.length > 0 ? (
//             currentProducts.map((product) => (
//               <div key={product.id} className="border p-4 rounded-lg shadow-md bg-white hover:shadow-xl transition">
//                 <img src={product.images[0]} alt={product.name} className="w-full h-44 object-cover rounded-md mb-3" />
//                 <p className="font-semibold text-lg text-gray-800">{product.name}</p>
//                 <p className="text-blue-600 font-medium text-lg">${product.price}</p>
//                 <div className="flex justify-between gap-4 mt-4">
//                   {/* <button
//                     onClick={() => dispatch(addToCart(product._id,quantity))}
//                     className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 rounded-lg hover:scale-105 transition-transform"
//                   >
//                     Add to Cart
//                   </button> */}
//                   <button className="w-full bg-gradient-to-r from-gray-600 to-gray-800 text-white py-2 rounded-lg hover:scale-105 transition-transform">
//                     <Link to={`/productdescription/${product._id}`}>Description</Link>
//                   </button>
//                 </div>

//               </div>
//             ))
//           ) : (
//             <p className="text-center text-gray-500 col-span-full">No products found.</p>
//           )}
//         </div>

//         {totalPages > 1 && (
//           <div className="flex justify-center mt-8 space-x-3">
//             {[...Array(totalPages)].map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentPage(index + 1)}
//                 className={`px-4 py-2 text-lg font-medium rounded-lg transition-colors ${currentPage === index + 1 ? "bg-blue-600 text-white" : "bg-gray-300 hover:bg-gray-400"}`}
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

// export default Eletronicscards;
// import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getAllProducts } from "../../redux/Slices/productSlice"; // Adjust the import based on your file structure
// import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/css'; // Import Swiper styles

// const Eletronicscards = () => {
//   const dispatch = useDispatch();
//   const { allProducts, loading } = useSelector((state) => state.product); // Use allProducts from Redux store

//   const [sort, setSort] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [showDescription, setShowDescription] = useState(false); // Track description visibility
//   const itemsPerPage = 6;
// console.log(allProducts)
//   // Fetch all products when the component mounts
//   useEffect(() => {
//     dispatch(getAllProducts());
//   }, [dispatch]);

//   // Filter products based on the selected category and type ("electronics")
//   const filteredProducts =
//     selectedCategory === "All"
//       ? allProducts.filter((product) => product.type === "Electronics") // Filter based on type "Clothes"
//       : allProducts.filter(
//           (product) => product.type === "Electronics" && product.category === selectedCategory
//         );

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
//           {["All", "Laptops", "Mobiles", "Tablets", "Accessories"].map((category) => ( // Example categories
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
//                 {/* Swipeable Image Carousel */}
//                 <Swiper
//                   spaceBetween={10} // Space between slides
//                   slidesPerView={1} // Show one image at a time
//                   navigation={true} // Enables next/prev buttons
//                   pagination={{ clickable: true }} // Pagination dots
//                   loop={true} // Infinite loop when you reach the last image
//                   className="mb-4"
//                 >
//                   {product.images.map((image, index) => (
//                     <SwiperSlide key={index}>
//                       <img
//                         src={image}
//                         alt={product.name}
//                         className="w-full h-44 object-cover rounded-md"
//                       />
//                     </SwiperSlide>
//                   ))}
//                 </Swiper>

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

// export default Eletronicscards;



import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../../redux/Slices/productSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";

const Eletronicscards = () => {
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
      ? allProducts.filter((product) => product.type === "Electronics")
      : allProducts.filter(
          (product) =>
            product.type === "Electronics" &&
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
          {["All", "Laptops", "Mobiles", "Headphones", "Accessories"].map(
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
                    {product.description.slice(0, 100)}...
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

export default Eletronicscards;



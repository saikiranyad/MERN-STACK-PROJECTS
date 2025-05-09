// import { useState, useEffect } from "react";

// const BestSellergroceries = () => {
//   const bestSellingProducts = [
//     { id: 1, name: "Onion", price: 999, category: "Vegetables", image: "https://images.onlymyhealth.com/imported/images/2023/September/22_Sep_2023/Main-onion.jpg" },
//     { id: 2, name: "Ground nut", price: 299, category: "Nuts", image: "https://farmfreshbangalore.com/cdn/shop/products/ProductImage_7_a32f3791-da99-44d7-b6bd-b4d3c4f90395.jpg?v=1677952249" },
//     { id: 3, name: "Bajra", price: 599, category: "Cearls", image: "https://vibrantliving.in/cdn/shop/files/BajraMillet_Sajjalu.png?v=1731059068&width=2048" },
//     { id: 4, name: "Apple", price: 5, category: "Fruits", image: "https://hips.hearstapps.com/hmg-prod/images/apples-at-farmers-market-royalty-free-image-1627321463.jpg?crop=0.796xw:1.00xh;0.103xw,0&resize=1200:*" },
//     { id: 9, name: "Campa Cola", price: 59, category: "Drinks", image: "https://www.newsx.com/wp-content/uploads/2024/10/IMG_4747.webp" },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const itemsPerPage = window.innerWidth < 768 ? 1 : 2; // 1 item for mobile, 2 for larger screens

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % bestSellingProducts.length);
//     }, 3000); // Auto-slide every 3 seconds

//     return () => clearInterval(interval);
//   }, [itemsPerPage]);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % bestSellingProducts.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex - itemsPerPage < 0 ? bestSellingProducts.length - itemsPerPage : prevIndex - itemsPerPage
//     );
//   };

//   return (
//     <div className="p-8 bg-white shadow-xl rounded-xl max-w-6xl mx-auto relative">
//       <h3 className="text-3xl font-bold mb-6 text-gray-900 text-center">🔥 Best Selling Products</h3>

//       {/* Carousel Container */}
//       <div className="overflow-hidden">
//         <div
//           className="flex transition-transform duration-700 ease-in-out"
//           style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
//         >
//           {bestSellingProducts.map((product) => (
//             <div key={product.id} className="w-full sm:w-1/2 p-6 flex-shrink-0">
//               <div className="bg-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6">
//                 <img src={product.image} alt={product.name} className="w-full h-72 rounded-lg object-contain mb-6" />
//                 <div className="text-center">
//                   <p className="font-bold text-xl text-gray-900">{product.name}</p>
//                   <p className="text-blue-600 font-semibold text-lg">{product.price}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Navigation Buttons */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-4 rounded-full hover:bg-gray-700 text-xl"
//       >
//         ❮
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-4 rounded-full hover:bg-gray-700 text-xl"
//       >
//         ❯
//       </button>
//     </div>
//   );
// };

// export default BestSellergroceries;




import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../../redux/slices/productSlice";

const BestSellergroceries = () => {
  const dispatch = useDispatch();
  const { allProducts } = useSelector((state) => state.product);

  const bestSellingProducts = allProducts.filter(
    (product) => product.bestSeller && product.type === "Groceries"
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (allProducts.length === 0) {
      dispatch(getAllProducts());
    }

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % bestSellingProducts.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [dispatch, allProducts.length, bestSellingProducts.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % bestSellingProducts.length
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? bestSellingProducts.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="p-4 bg-white shadow-xl rounded-xl max-w-xl mx-auto relative overflow-hidden">
      <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
        🔥 Best Selling Electronics
      </h3>

      {/* Slide wrapper */}
      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            width: `${bestSellingProducts.length * 100}%`,
            transform: `translateX(-${currentIndex * (100 / bestSellingProducts.length)}%)`,
          }}
        >
          {bestSellingProducts.map((product) => (
            <div
              key={product._id}
              className="w-full flex-shrink-0 px-4"
              style={{ width: `${100 / bestSellingProducts.length}%` }}
            >
              <div className="bg-gray-100 rounded-lg shadow-md text-center p-4">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-64 object-contain rounded-lg mb-4"
                />
                <p className="font-bold text-xl text-gray-900">{product.name}</p>
                <p className="text-blue-600 text-lg font-semibold">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      {bestSellingProducts.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
          >
            ❯
          </button>
        </>
      )}
    </div>
  );
};

export default BestSellergroceries;


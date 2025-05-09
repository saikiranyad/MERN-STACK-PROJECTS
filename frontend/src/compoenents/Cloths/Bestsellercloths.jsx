






import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../../redux/slices/productSlice"; // Adjust import according to your file structure

const Bestsellercloths = () => {
  const dispatch = useDispatch();
  const { allProducts } = useSelector((state) => state.product);

  // Filter the products that are best sellers and belong to the 'Clothes' type
  const bestSellingProducts = allProducts.filter(
    (product) => product.bestSeller && product.type === "Clothes"
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(window.innerWidth < 768 ? 1 : 2);

  useEffect(() => {
    if (allProducts.length === 0) {
      dispatch(getAllProducts()); // Fetch all products if not already available
    }

    // Adjust items per page based on window width
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 2); // 1 item for mobile, 2 for larger screens
    };

    window.addEventListener("resize", handleResize);

    const interval = setInterval(() => {
      if (bestSellingProducts.length > 1) {
        setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % bestSellingProducts.length);
      }
    }, 3000); // Auto-slide every 3 seconds (only if there are multiple products)

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [allProducts, itemsPerPage, bestSellingProducts, dispatch]);

  const nextSlide = () => {
    if (bestSellingProducts.length > 1) {
      setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % bestSellingProducts.length);
    }
  };

  const prevSlide = () => {
    if (bestSellingProducts.length > 1) {
      setCurrentIndex((prevIndex) =>
        prevIndex - itemsPerPage < 0 ? bestSellingProducts.length - itemsPerPage : prevIndex - itemsPerPage
      );
    }
  };

  return (
    <div className="p-8 bg-white shadow-xl rounded-xl max-w-6xl mx-auto relative">
      <h3 className="text-3xl font-bold mb-6 text-gray-900 text-center">🔥 Best Selling Clothes</h3>

      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
        >
          {bestSellingProducts.map((product) => (
            <div key={product._id} className="w-full sm:w-1/2 p-6 flex-shrink-0">
              <div className="bg-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6">
                <img src={product.images[0]} alt={product.name} className="w-full h-72 rounded-lg object-contain mb-6" />
                <div className="text-center">
                  <p className="font-bold text-xl text-gray-900">{product.name}</p>
                  <p className="text-blue-600 font-semibold text-lg">{`$${product.price}`}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      {bestSellingProducts.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-4 rounded-full hover:bg-gray-700 text-xl"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-4 rounded-full hover:bg-gray-700 text-xl"
          >
            ❯
          </button>
        </>
      )}
    </div>
  );
};

export default Bestsellercloths;



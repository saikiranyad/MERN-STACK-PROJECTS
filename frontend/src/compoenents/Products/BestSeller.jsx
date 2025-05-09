





import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const BestSeller = () => {
  const dispatch = useDispatch();
  const { allProducts } = useSelector((state) => state.product);

  // Filter products where bestSeller is true
  const bestSellingProducts = allProducts.filter(product => product.bestSeller);

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = window.innerWidth < 768 ? 1 : 2; // 1 item for mobile, 2 for larger screens

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % bestSellingProducts.length);
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(interval);
  }, [itemsPerPage, bestSellingProducts.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex + itemsPerPage >= bestSellingProducts.length) {
        return 0; // Reset to the first slide if we're at the end
      }
      return prevIndex + itemsPerPage;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex - itemsPerPage < 0) {
        return bestSellingProducts.length - itemsPerPage; // Go to the last slide if we're at the beginning
      }
      return prevIndex - itemsPerPage;
    });
  };

  return (
    <div className="p-8 bg-white shadow-xl rounded-xl max-w-6xl mx-auto relative">
      <h3 className="text-3xl font-bold mb-6 text-gray-900 text-center">🔥 Best Selling Products</h3>

      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / itemsPerPage}%)`,
            display: 'flex',
          }}
        >
          {bestSellingProducts.map((product) => (
            <div key={product._id} className="w-full sm:w-1/2 p-6 flex-shrink-0">
              <div className="bg-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6">
                <img
                  src={product.images[0]} // Assuming images is an array and you want to show the first one
                  alt={product.name}
                  className="w-full h-72 rounded-lg object-contain mb-6"
                />
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
    </div>
  );
};

export default BestSeller;








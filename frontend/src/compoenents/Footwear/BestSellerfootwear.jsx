import { useState, useEffect } from "react";

const BestSellerfootwear = () => {
  const bestSellingProducts = [
    { id: 1, name: "Reebok chapals", price: 999, category: "Chapals", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfFCsc5u3HbRftK22Qz1eh2zbU96GpnjSf2g&s" },
    { id: 2, name: "Addidas loafers ", price: 499, category: "loafers", image: "https://static0.givemesportimages.com/wordpress/wp-content/uploads/2022/06/Gucci-x-Adidas-Loafers-Promo.jpg" },
    { id: 3, name: "crocs shoes", price: 199, category: "shoes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRRlOLhGdN7nKen9GXHEb3sUNc9RLKXRDFxORXRFXuN98TZc74NX_g_PY3w7Pr5UDbKnY&usqp=CAU" },
    { id: 4, name: "puma sandals", price: 299, category: "sandals", image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/sandal/d/g/s/-original-imagykehbavtgfsf.jpeg?q=20&crop=false" },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = window.innerWidth < 768 ? 1 : 2; // 1 item for mobile, 2 for larger screens

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % bestSellingProducts.length);
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(interval);
  }, [itemsPerPage]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % bestSellingProducts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerPage < 0 ? bestSellingProducts.length - itemsPerPage : prevIndex - itemsPerPage
    );
  };

  return (
    <div className="p-8 bg-white shadow-xl rounded-xl max-w-6xl mx-auto relative">
      <h3 className="text-3xl font-bold mb-6 text-gray-900 text-center">🔥 Best Selling Products</h3>

      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
        >
          {bestSellingProducts.map((product) => (
            <div key={product.id} className="w-full sm:w-1/2 p-6 flex-shrink-0">
              <div className="bg-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6">
                <img src={product.image} alt={product.name} className="w-full h-72 rounded-lg object-contain mb-6" />
                <div className="text-center">
                  <p className="font-bold text-xl text-gray-900">{product.name}</p>
                  <p className="text-blue-600 font-semibold text-lg">{product.price}</p>
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

export default BestSellerfootwear;

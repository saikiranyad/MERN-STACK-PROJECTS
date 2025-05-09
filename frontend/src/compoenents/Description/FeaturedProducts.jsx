import React from 'react'

const FeaturedProducts = () => {
    const relatedProducts = [
        { id: 2, name: "Gaming Headset", price: 129, image: "https://via.placeholder.com/150", rating: 4.3 },
        { id: 3, name: "Bluetooth Earbuds", price: 79, image: "https://via.placeholder.com/150", rating: 4.1 },
        { id: 4, name: "Over-Ear Headphones", price: 149, image: "https://via.placeholder.com/150", rating: 4.6 },
        { id: 5, name: "Wired Studio Headphones", price: 199, image: "https://via.placeholder.com/150", rating: 4.7 },
      ];
  return (
    <div className="mt-10">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Related Products</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
              <div className="mt-3 text-center">
                <p className="text-lg font-semibold">{product.name}</p>
                <p className="text-blue-600 font-bold">${product.price}</p>
                <div className="flex justify-center mt-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < Math.round(product.rating) ? "text-yellow-500" : "text-gray-300"} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
  )
}

export default FeaturedProducts

import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: "Men", price: "$499", image: "https://i.pinimg.com/736x/07/7e/41/077e412eacf813cfe27ae9061f36f228.jpg",shop :'cloths' },
  { id: 2, name: "Women", price: "$99", image: "https://cdn.shopify.com/s/files/1/0701/9354/5439/files/fashion-store-aliexpress.png?v=1733482145",shop :'cloths'  },
  { id: 3, name: "Kids", price: "$199", image: "https://www.organicandmore.com/wp-content/uploads/2024/11/smiley-young-childrens_23-2148445721.jpg",shop :'cloths'  }
];

const Featuredproducts = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-center">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg p-4 text-center">
            <img src={product.image} alt={product.name} className="w-full h-68 object-cover rounded-md"/>
            <h3 className="mt-2 text-lg font-bold">{product.name}</h3>
            {/* <p className="text-gray-600">{product.price}</p> */}
            <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              <Link to={`/${product.shop}`}>Shop Now</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featuredproducts;

import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: "Clothing", image: "https://thumbs.dreamstime.com/b/group-smiling-friends-fashionable-jeans-young-men-women-posing-studio-fashion-people-happy-lifestyle-clothes-132357480.jpg",explore:"cloths" },
  { name: "Electronics", image: "https://img.freepik.com/premium-photo/collection-electronic-devices-including-laptop-phone-ipod_1065421-12202.jpg?semt=ais_hybrid",explore:"electronics" },
  { name: "Groceries", image: "https://d32ijn7u0aqfv4.cloudfront.net/wp/wp-content/uploads/raw/groceries-bag_SOAD19044_692778630_is_1560x880.jpg",explore:'groceries' },
 
];

const Category = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-center">Shop by Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {categories.map((category) => (
          <div key={category.name} className="bg-white shadow-md rounded-lg p-4 text-center">
            <img src={category.image} alt={category.name} className="w-full h-68 object-cover rounded-md"/>
            <h3 className="mt-2 text-lg font-bold">{category.name}</h3>
            <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              <Link to={`/${category.explore}`}>Explore</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;

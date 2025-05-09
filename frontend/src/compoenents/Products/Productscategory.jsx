import { useState } from "react";


const Productcategory = () => {
  const categories = ["All", "Clothing", "Electronics", "Home Decor", "Groceries"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h3 className="text-xl font-semibold mb-3">Filter by Category</h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <label key={category} className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="category"
              value={category}
              checked={selectedCategory === category}
              onChange={() => setSelectedCategory(category)}
              className="accent-blue-500"
            />
            <span className="text-gray-700">{category}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Productcategory;

import { useState } from "react";

const SortingandFiltering = () => {
  const [sort, setSort] = useState("");

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h3 className="text-xl font-semibold mb-3">Sort by</h3>
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="w-full p-2 border rounded-md"
      >
        <option value="">Select</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="rating">Top Rated</option>
      </select>
    </div>
  );
};

export default SortingandFiltering;

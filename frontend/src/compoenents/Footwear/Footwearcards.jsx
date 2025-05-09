import { useState } from "react";

const Footwearcards = () => {
  const products = [
    { id: 1, name: "Reebok chapals", price: 999, category: "Chapals", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfFCsc5u3HbRftK22Qz1eh2zbU96GpnjSf2g&s" },
    { id: 2, name: "Addidas loafers ", price: 499, category: "loafers", image: "https://static0.givemesportimages.com/wordpress/wp-content/uploads/2022/06/Gucci-x-Adidas-Loafers-Promo.jpg" },
    { id: 3, name: "crocs shoes", price: 199, category: "shoes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRRlOLhGdN7nKen9GXHEb3sUNc9RLKXRDFxORXRFXuN98TZc74NX_g_PY3w7Pr5UDbKnY&usqp=CAU" },
    { id: 4, name: "puma sandals", price: 299, category: "sandals", image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/sandal/d/g/s/-original-imagykehbavtgfsf.jpeg?q=20&crop=false" },
    { id: 5, name: "Nike Slippers", price: 799, category: "slippers", image: "https://rukminim3.flixcart.com/image/850/1000/jgv5jm80/kids-sandal/n/p/g/4-5-819352-001-nike-original-imaf4wr9ygyqkczp.jpeg?q=20&crop=false" },
    { id: 6, name: "H & M women sandles", price: 29, category: "sandles", image: "https://assets.ajio.com/medias/sys_master/root/20241116/7qQw/6737cbca0f47f80c878c9200/-473Wx593H-700759499-black-MODEL.jpg" },
    { id: 7, name: "D & G High heels", price: 599, category: "Heels", image: "https://img.shopstyle-cdn.com/sim/7e/e5/7ee55d5957007414d6d5c614dea7588b_xlarge/baroque-d-g-heeled-sandals.jpg" },
    { id: 8, name: "Saint G boots", price: 5, category: "boots", image: "https://img.tatacliq.com/images/i19//658Wx734H/MP000000020653590_658Wx734H_202408131333301.jpeg" },
    { id: 9, name: "Paragon Chapals", price: 59, category: "Chapals", image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/sandal/b/s/l/-original-imagg3acnhxnhcuk.jpeg?q=90&crop=false" },
  ];

  const [sort, setSort] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    return 0;
  });

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const currentProducts = sortedProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto p-4">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 bg-white shadow-lg rounded-lg p-5 border border-gray-200">
        <h3 className="text-xl font-semibold mb-4">Filter by Category</h3>
        <div className="space-y-3">
          {["All", "loafers","boots","Chapals", "shoes", "sandals","slippers","Heels"].map((category) => (
            <label key={category} className="flex items-center space-x-2 cursor-pointer">
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
              <span className="text-gray-700 text-lg">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full md:w-3/4">
        {/* Sorting Dropdown */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-semibold">Products</h2>
          <select
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
              setCurrentPage(1);
            }}
            className="p-2 border rounded-lg bg-white shadow-md text-gray-700"
          >
            <option value="">Sort by</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
          {currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <div key={product.id} className="border p-7 rounded-lg shadow-md bg-white hover:shadow-xl transition">
                <img src={product.image} alt={product.name} className="w-full h-74 object-contain rounded-md mb-3" />
                <p className="font-semibold text-lg text-gray-800">{product.name}</p>
                <p className="text-blue-600 font-medium text-lg">${product.price}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">No products found.</p>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 space-x-3">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 text-lg font-medium rounded-lg transition-colors ${
                  currentPage === index + 1 ? "bg-blue-600 text-white" : "bg-gray-300 hover:bg-gray-400"
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

export default Footwearcards;

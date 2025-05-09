import React from 'react';

const Outofstock = () => {
  const outOfStockProducts = [
    { id: 1, name: 'Wireless Headphones', type: 'Electronics', info: 'Out of Stock since March 1st' },
    { id: 2, name: 'Running Shoes', type: 'Footwear', info: 'Out of Stock since February 20th' },
    { id: 3, name: 'Organic Almonds', type: 'Groceries', info: 'Out of Stock since March 5th' },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">🚫 Out of Stock Products</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-3">Product Name</th>
            <th className="border p-3">Type of Product</th>
            <th className="border p-3">Out of Stock Info</th>
          </tr>
        </thead>
        <tbody>
          {outOfStockProducts.map((product) => (
            <tr key={product.id} className="text-center">
              <td className="border p-3">{product.name}</td>
              <td className="border p-3">{product.type}</td>
              <td className="border p-3 text-red-500">{product.info}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Outofstock;

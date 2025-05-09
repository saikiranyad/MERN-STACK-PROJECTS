import React from 'react'

const Productcard = () => {
  return (
    <div className="border rounded-lg shadow-md p-4">
    <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
    <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
    <p className="text-gray-600">${product.price}</p>
    <button className="bg-blue-500 text-white mt-2 py-2 px-4 rounded w-full hover:bg-blue-600">
      Add to Cart
    </button>
  </div>
  )
}

export default Productcard

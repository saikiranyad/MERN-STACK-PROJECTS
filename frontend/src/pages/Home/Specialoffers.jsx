import React from 'react'

const Specialoffers = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-yellow-100 rounded-lg">
      <h2 className="text-2xl font-semibold text-center">Special Offers & Discounts</h2>
      <div className="mt-6 text-center">
        <p className="text-lg font-bold">Limited-Time Deal: 50% Off on Electronics!</p>
        <p className="text-gray-600">Use code <span className="text-blue-600 font-semibold">SAVE50</span> at checkout.</p>
        <button className="mt-3 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded">
          Grab Deal
        </button>
      </div>
    </div>
  )
}

export default Specialoffers

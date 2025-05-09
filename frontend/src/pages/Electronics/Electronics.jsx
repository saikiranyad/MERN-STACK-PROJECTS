import React from 'react'
import Eletronicscards from '../../compoenents/Electronics/Eletronicscards'
import BestSellereletronics from '../../compoenents/Electronics/BestSellereletronics'

const Electronics = () => {
  return (
    <div className="container mx-auto px-6 py-6 space-y-6">
        <Eletronicscards/>
        <BestSellereletronics/>
      
    </div>
  )
}

export default Electronics

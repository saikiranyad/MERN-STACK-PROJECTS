import React from 'react'
import Footwearcards from '../../compoenents/Footwear/Footwearcards'
import BestSellerfootwear from '../../compoenents/Footwear/BestSellerfootwear'

const Footwear = () => {
  return (
    <div className="container mx-auto px-6 py-6 space-y-6">
      <Footwearcards/>
      <BestSellerfootwear/>
      
    </div>
  )
}

export default Footwear

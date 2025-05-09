import React from 'react'
import Groceriescards from '../../compoenents/Groceries/Groceriescards'
import BestSellergroceries from '../../compoenents/Groceries/BestSellergroceries'

const Groceries = () => {
  return (
    <div className="container mx-auto px-6 py-6 space-y-6">
      <Groceriescards/>
      <BestSellergroceries/>
      
    </div>
  )
}

export default Groceries

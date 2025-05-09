import React from 'react'
import Clothscards from '../../compoenents/Cloths/Clothscards'
import Bestsellercloths from '../../compoenents/Cloths/Bestsellercloths'

const Cloths = () => {
  return (
    <div className="container mx-auto px-6 py-6 space-y-6">
      <Clothscards/>
      <Bestsellercloths/>
    </div>
  )
}

export default Cloths

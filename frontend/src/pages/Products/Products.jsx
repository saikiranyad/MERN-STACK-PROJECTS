import React from "react";

import BestSeller from "../../compoenents/Products/BestSeller";
import Productcards from "../../compoenents/Products/Productcards";



const Products = () => {
  return (
    <div className="container mx-auto px-6 py-6 space-y-6">
      {/* Product Listings */}
      <Productcards />

      {/* Best Sellers */}
      <BestSeller />
    </div>
  );
};

export default Products;


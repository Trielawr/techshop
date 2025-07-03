import React from 'react';
import ProductListSection from '../../Components/ProductListSection/ProductListSection';
import FlashSalesSection from '../../Components/FlashSalesSection/FlashSalesSection';
import CategorySection from '../../Components/CategorySection/CategorySection';

const AllPages = () => {
  return (
    <div>
      <ProductListSection />
      <FlashSalesSection />
      <CategorySection/>
    </div>
  )
}

export default AllPages;    
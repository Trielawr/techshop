import React from 'react';
import ProductListSection from '../../Components/Section/ProductListSection/ProductListSection';
import FlashSalesSection from '../../Components/Section/FlashSalesSection/FlashSalesSection';
import CategorySection from '../../Components/Section/CategorySection/CategorySection';

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
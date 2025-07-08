import React from 'react';
import ProductListSection from '../../Components/Section/ProductListSection/ProductListSection';
import FlashSalesSection from '../../Components/Section/FlashSalesSection/FlashSalesSection';
import CategorySection from '../../Components/Section/CategorySection/CategorySection';
import BestSellingSection from '../../Components/Section/BestSellingSection/BestSellingSection';

const AllPages = () => {
  return (
    <div>
      <ProductListSection />
      <FlashSalesSection />
      <CategorySection />
      <BestSellingSection/>
    </div>
  )
}

export default AllPages;    
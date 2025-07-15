import React from 'react';
import ProductListSection from '../../Components/Section/ProductListSection/ProductListSection';
import FlashSalesSection from '../../Components/Section/FlashSalesSection/FlashSalesSection';
import CategorySection from '../../Components/Section/CategorySection/CategorySection';
import BestSellingSection from '../../Components/Section/BestSellingSection/BestSellingSection';
import AdvertisementSection from '../../Components/Section/AdvertisementSection/AdvertisementSection';

const AllPages = () => {
  return (
    <div>
      <ProductListSection />
      <FlashSalesSection />
      <CategorySection />
      <BestSellingSection />
      <AdvertisementSection/>
    </div>
  )
}

export default AllPages;    
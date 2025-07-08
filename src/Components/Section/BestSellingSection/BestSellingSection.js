import React from 'react'
import './BestSellingSection.scss';
import CategoryDivider from '../../Components/CategoryDivider/CategoryDivider';
import Carusel from '../../Components/Carusel/Carusel';
import { categoryData } from '../../../Date/productdata';
import CategoryCard from '../../Components/CategoryCard/CategoryCard';

const BestSellingSection = () => {
  return (
    <div className='container'>
      <div className='bestselling'>
        <CategoryDivider text={"This Month"} />  
        <h2>Best Selling Products</h2>
        <Carusel
            caruselDate={categoryData}
            CaruselItem={CategoryCard}
            className={'category-slider'}
        />
      </div>
    </div>
  )
}

export default BestSellingSection;
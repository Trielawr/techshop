import React from 'react'
import './BestSellingSection.scss';
import CategoryDivider from '../../Components/CategoryDivider/CategoryDivider';
import { productData } from '../../../Date/productdata';
import ProductCard from '../../Components/ProductCard/ProductCard';
import Button from '../../Components/Button/Button';
import { NavLink } from 'react-bootstrap';
import { ROUTES } from './../../../assets/utilits';

const BestSellingSection = () => {

  // Filter products to get only those with salesrating greater than 5
  const bestSellingProducts = productData.filter(product => product.salesrating > 5);
  
  return (
    <div className='container'>
      <div className='bestselling'>
        <CategoryDivider text={"This Month"} /> 
        <div className='bestselling-header'> 
          <h2>Best Selling Products</h2>
          <Button
            type='button'
            className='botn-orange'
            text='View All'
            onClick={() => <NavLink to={ROUTES.error} />}
          />
        </div>
        <ul className='bestselling-products'>
          {bestSellingProducts.length > 0 && 
             bestSellingProducts.map((item, index) => (
               <li key={index}>
                 <ProductCard
                  text={item.text}
                  sale={item.sale}
                  price={item.price}
                  iconname={item.iconname}
                  imgname={item.imgname}
                  reviews={item.reviews}/>
               </li>
             ))
          }
        </ul>
      </div>
    </div>
  )
}

export default BestSellingSection;
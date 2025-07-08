import React, { useRef} from 'react';
import CategoryDivider from '../../Components/CategoryDivider/CategoryDivider';
import CountdownTimer from '../../Components/CountdownTimer/CountdownTimer';
import ProductCard from '../../Components/ProductCard/ProductCard';
import { ROUTES } from '../../../assets/utilits';
import Carusel from '../../Components/Carusel/Carusel';
import './FlashSalesSection.scss'
import { NavLink } from 'react-bootstrap';
import { productData } from '../../../Date/productdata';
import Button from '../../Components/Button/Button';

const FlashSalesSection = () => {
return (
    <div className='container flash-container'>
      <div className='flash-sales'>
        <div className='flash-sales-header'>
            <CategoryDivider text={"Today's"} />
            <h2>Flash Sales</h2>
        </div>
        <CountdownTimer targetDate='2025-07-31T23:59:59' />
      </div> 
      <div>
        <Carusel
          caruselDate={productData}
          CaruselItem={ProductCard}
          className={'flash-slider'}
        />
      </div>
      <div className='botn-allproducts'>
        <Button
          className='botn-orange'
          text='View All Products'
          type='button'
          onClick={() => <NavLink to={ROUTES.error} />}
        />
      </div>
    </div>
  )
}

export default FlashSalesSection;
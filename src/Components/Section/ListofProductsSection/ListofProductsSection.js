import React from 'react'
import './ListofProductsSection.scss';
import CategoryDivider from '../../Components/CategoryDivider/CategoryDivider';
import { productData } from '../../../Date/productdata';
import ProductCard from '../../Components/ProductCard/ProductCard';
import Carusel from '../../Components/Carusel/Carusel';
import { multisettings } from '../../../assets/utilits';
import Button from '../../Components/Button/Button';
import { NavLink } from 'react-bootstrap';
import { ROUTES } from '../../../assets/utilits';

const ListofProductsSection = () => {
  return (
      <div className='container'>
        <div className='allproducts'>
          <CategoryDivider text='Our Products' />  
          <h2>Explore Our Products</h2>
          <Carusel
            caruselDate={productData}
            CaruselItem={ProductCard}
            className={'flash-slider'}
            settings={multisettings}
          />
          <div className='botn-allproducts'>
            <Button
              className='botn-orange'
              text='View All Products'
              type='button'
              onClick={() => <NavLink to={ROUTES.error} />}
            />
      </div>
      </div>
    </div>
  )
}

export default ListofProductsSection;
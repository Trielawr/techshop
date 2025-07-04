import React, { useRef} from 'react';
import CategoryDivider from '../../Components/CategoryDivider/CategoryDivider';
import CountdownTimer from '../../Components/CountdownTimer/CountdownTimer';
import ProductCard from '../../Components/ProductCard/ProductCard';
import { ROUTES } from '../../../assets/utilits';
import Carusel from '../../Components/Carusel/Carusel';
import Icon from '../../Components/Icon/Icon';
import Slider from "react-slick";
import './FlashSalesSection.scss'
import { NavLink } from 'react-bootstrap';
import { productData } from '../../../Date/productdata';
import CaruselButton from '../../Components/Carusel/CaruselButton';
import Button from '../../Components/Button/Button';

const FlashSalesSection = () => {

  const sliderRef = useRef(null);
  
    const settings = {
      infinite: false,
      dots: false,
      centerMode: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      variableWidth: true
    };

  return (
    <div className='container'>
      <div className='flash-sales'>
        <div className='flash-sales-header'>
            <CategoryDivider text={"Today's"} />
            <h2>Flash Sales</h2>
        </div>
        <CountdownTimer targetDate='2025-07-31T23:59:59' />
        <CaruselButton/>
      </div> 
        <div>
        <Carusel
          CaruselItem={productData}
        />
        </div>
        {/* <div className='arrows-wrapper' >
          <button
            className='arrows-custom arrows-custom-prev'  
            onClick={()=> sliderRef.current.slickPrev() }>
            <Icon iconname={'icons arrow-right'} width={'24'} height={'24'}/>
          </button>
          <button
            className='arrows-custom arrows-custom-next'
            onClick={()=> sliderRef.current.slickNext() }>
            <Icon iconname={'icons_arrow-left'} width={'24'} height={'24'}/>
          </button>
        </div>
      </div>
      <div className="slider-container flash-slider">
        <Slider  ref={sliderRef} {...settings}>
          <div>
            <h3>
              <ProductCard
                text='HAVIT HV-G92 Gamepad'
                sale={'40'}
                price={'160'}
                iconname={'Five star'}
                imgname={'havit'}
                reviews={'88'}/>
            </h3>
          </div>
          <div>
            <h3>
              <ProductCard
                text='AK-900 Wired Keyboard'
                sale={'35'}
                price={'1160'}
                iconname={'Four Star'}
                imgname={'wired keyboard'}
                reviews={'75'}/>
            </h3>
          </div>
          <div>
            <h3>
              <ProductCard
                  text='IPS LCD Gaming Monitor'
                  sale={'35'}
                  price={'400'}
                  iconname={'Five star'}
                  imgname={'gaming monitor'}
                  reviews={'99'}/>
            </h3>
          </div>
          <div>
            <h3>
              <ProductCard
                    text='S-Series Comfort Chair'
                    sale={'25'}
                    price={'400'}
                    iconname={'Four Half Star'}
                    imgname={'comfort chair'}
                    reviews={'99'}/>
            </h3>
          </div>
          <div>
            <h3>
              <ProductCard
                  text='HAVIT HV-G92 Gamepad'
                  sale={'40'}
                  price={'160'}
                  iconname={'Five star'}
                  imgname={'havit'}
                  reviews={'88'}/>
            </h3>
          </div>
          <div>
            <h3>
              <ProductCard
                  text='AK-900 Wired Keyboard'
                  sale={'35'}
                  price={'1160'}
                  iconname={'Four Star'}
                  imgname={'wired keyboard'}
                  reviews={'75'}/>
            </h3>
          </div>
        </Slider>*/}

      <div className='botn-allproducts'>
        <Button
          className='botn-orange'
          text='View All Products'
          type='button'
          onClick={()=> <NavLink to={ROUTES.error}/>}
        />
      </div>
    </div>
  )
}

export default FlashSalesSection;
import React from 'react';
import CategoryDivider from '../CategoryDivider/CategoryDivider';
import CountdownTimer from '../CountdownTimer/CountdownTimer';
import ProductCard from '../ProductCard/ProductCard';
import Icon from '../Icon/Icon';
import Slider from "react-slick";
import './FlashSalesSection.scss'

const FlashSalesSection = () => {

  function NextArrow(props) {
    const { className, onClick } = props;
    return (
      <button
        type="button"
        className={className}
        onClick={onClick}
      >
        <Icon iconname="icons arrow-right" width={'24'} height={'24'}/>
      </button>
    );
  }
  
  function PrevArrow(props) {
    const { className, onClick } = props;
    return (
      <button
        type="button"
        className={className}
        onClick={onClick}
      >
        <Icon iconname="icons_arrow-left" width={'24'} height={'24'}/>
      </button>
    );
  }
  
    const settings = {
      dots: true,
      infinite: true,
      dots: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      swipeToSlide: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };

  return (
    <div className='container'>
      <div className='flash-sales'>
        <div className='flash-sales-header'>
            <CategoryDivider text={"Today's"} />
            <h2>Flash Sales</h2>
        </div>
        <CountdownTimer targetDate='2025-07-31T23:59:59'/>
      </div>
      <div className="slider-container flash-slider">
        <Slider {...settings}>
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
        </Slider>
      </div>
    </div>
  )
}

export default FlashSalesSection;
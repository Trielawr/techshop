import { useRef} from 'react';
import ProductCard from '../../Components/ProductCard/ProductCard';
import Slider from "react-slick";
import './Carusel.scss'

const Carusel = ({ caruselDate, CaruselItem, className }) => {
  
  // console.log('CaruselItem', CaruselItem);

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
      <div className={`slider-container ${className}`}>
        <Slider ref={sliderRef} {...settings}>
          {
            // caruselDate === 'categoryData' ? console.log('first') : console.log('second')
            caruselDate.map((item, index) => (
            <div  className='carousel-wrapper' key={index}>
              <CaruselItem
                text={item.text}
                sale={item.sale}
                price={item.price}
                iconname={item.iconname}
                imgname={item.imgname}
                reviews={item.reviews}
              />
            </div>
          ))
          }
        </Slider>
     </div>
  </div>
  )
}

export default Carusel;
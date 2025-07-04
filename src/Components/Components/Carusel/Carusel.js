import { useRef} from 'react';
import ProductCard from '../../Components/ProductCard/ProductCard';
import Slider from "react-slick";
import './Carusel.scss'

const Carusel = ({CaruselItem}) => {

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
      <div className="slider-container flash-slider">
        <Slider ref={sliderRef} {...settings}>
          {CaruselItem.map((item, index) => (
            <div key={index}>
              <ProductCard
                text={item.text}
                sale={item.sale}
                price={item.price}
                iconname={item.iconname}
                imgname={item.imgname}
                reviews={item.reviews}
              />
            </div>
          ))}
        </Slider>
     </div>
  </div>
  )
}

export default Carusel;
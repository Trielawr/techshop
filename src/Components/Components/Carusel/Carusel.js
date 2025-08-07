import { useRef} from 'react';
import Slider from "react-slick";
import Icon from '../Icon/Icon';
import './Carusel.scss'

const Carusel = ({ caruselDate, CaruselItem, className, settings }) => {

    const sliderRef = useRef(null);

  return (
    <div className='container'>
      <div className={`slider-container ${className}`}>
        <div className='arrows-wrapper' >
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
        <Slider ref={sliderRef} {...settings}>
          {
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
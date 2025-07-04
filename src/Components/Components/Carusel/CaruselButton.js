import { useRef } from 'react';
import Icon from '../../Components/Icon/Icon';
import './Carusel.scss';

const CaruselButton = () => {

const sliderRef = useRef(null);
    
  return (
    <div className='container'>
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
    </div>
  )
}

export default CaruselButton;
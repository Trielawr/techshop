import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../assets/utilits';
import './Advertisement.scss';
import Icon from '../Icon/Icon';

const Advertisement = ({ model, text, logo, img }) => {
  return (
    <div className='container'>
      <div className='advertisement'>
        <div className='advertisement-block'> 
          <div className='advertisement-header'> 
            <img className='img-fluid' src={logo} alt={`${model} Logo`} />
            <p>{model}</p>  
          </div>
          <p className='advertisement-main'>{text}</p>
          <div className='advertisement-link'>
              <span>Shop Now</span>
              <NavLink to={ROUTES.home}>
                <Icon iconname='icons arrow-right' width={'24'} height={'24'}/>
              </NavLink> 
          </div>
        </div>
        <img className='advertisement-img img-fluid' src={img} alt={`${model} Image`} />
    </div>
    </div>
  )
}

export default Advertisement;
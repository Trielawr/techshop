import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../assets/utilits';
import Apple from '../../assets/img/Apple_gray_logo 1.png';
import Phone from '../../assets/img/Phone.png';
import './Advertisement.scss';
import Icon from '../Icon/Icon';

const Advertisement = ({ model, text}) => {
  return (
    <div className='container'>
      <div className='advertisement'>
        <div className='advertisement-header'> 
           <img src={Apple} alt="Apple Logo" />
           <p>{model}</p>  
        </div>
        <p className='advertisement-main'>{text}</p>
        <div className='advertisement-link'>
            <span>Shop Now</span>
            <NavLink to={ROUTES.home}>
              <Icon iconname='icons arrow-right' width={'24'} height={'24'}/>
            </NavLink> 
        </div>
        <img className='advertisement-img' src={Phone} alt="Phone Logo" />
    </div>
    </div>
  )
}

export default Advertisement;
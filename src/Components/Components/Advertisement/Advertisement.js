import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../assets/utilits';
import './Advertisement.scss';
import Icon from '../Icon/Icon';
import CountdownTimer from '../CountdownTimer/CountdownTimer';
import Button from '../Button/Button';

const Advertisement = ({ model, countdown,buttontype, text, logo, img }) => {
  
  console.log('buttontype', buttontype);
  return (
      <div className='advertisement'>
        <div className='advertisement-block'> 
          <div className='advertisement-header'> 
            {logo && <img className='img-fluid' src={logo} alt={`${model} Logo`} />}
            <h5>{model}</h5>  
          </div>
          <p className='advertisement-main'>{text}</p>
          {countdown && <CountdownTimer targetDate='2025-10-30T23:59:59' />}
          {buttontype ==='link' &&  
            <div className='advertisement-link'>
              <span>Shop Now</span>
              <NavLink to={ROUTES.home}>
                <Icon iconname='icons arrow-right' width={'24'} height={'24'}/>
              </NavLink> 
            </div> 
          }
          {buttontype ==='button' &&  
              <Button
                type='button'
                className='botn-green'
                text='Buy Now!'
                onClick={() => <NavLink to={ROUTES.home} />}
              />
          }
        </div>
        <img className='advertisement-img img-fluid' src={img} alt={`${model} Image`} />
    </div>
  )
}

export default Advertisement;
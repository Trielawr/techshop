import React from 'react';
import '../Footer/Footer.scss';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../assets/utilits';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
      <div>
          <NavLink to={ROUTES.home} className='header-main-logo'>Exclusive</NavLink>
          {
            
          }
      </div>
      </div>
    </div>
  )
}

export default Footer;
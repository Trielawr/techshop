import React from 'react';
import '../Footer/Footer.scss';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../assets/utilits';
import { footerData } from '../../Date/webdata';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <ul className='footer-main'>
          <div>
            <li><NavLink to={ROUTES.home} className='footer-main-logo'>Exclusive</NavLink></li>
            <li><NavLink to={ROUTES.home} className='footer-main-subscribe'>Subscribe</NavLink></li>
            <li><NavLink to={ROUTES.home} className='footer-main-discount'>Get 10% off your first order</NavLink></li> 
            <li>

            </li>
          </div>
          {
            footerData.map((item, index) => 
              <li key={index}>
                <h5>{item.title}</h5>
                {item.item.map((subitem, index) =>
                 {!subitem.type === 'link' ?
                  <li key={index}>
                    <Button
                      type={subitem.type}
                      href={subitem.to}
                      text={subitem.name}
                    />
                  </li> :
                  <li> {subitem.name}</li>
                }
                )}
              </li>
            )
          }
        </ul>
        <Icon iconname='icon-copyright' width={'20'} height={'20'}></Icon>
        <h5>Copyright Rimel 2022. All right reserved</h5>
      </div>
    </div>
  )
}

export default Footer;
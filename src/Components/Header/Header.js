import React from 'react';
import '../Header/Header.scss';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Icon from '../Icon/Icon';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../assets/utilits';

const Header = () => {
  return (  
      <header > 
        <div className='header-back'>
          <div className='container'>
            <div className='header-top'>
              <div className='header-top-banner'>
                <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                <NavLink to={ROUTES.home}>
                  <span>ShopNow</span>
                </NavLink>
              </div>
              <div className='header-top-language'>
                <DropdownButton id="dropdown-basic-button" title="English">
                  <Dropdown.Item href="#/Uk">Uk</Dropdown.Item>
                  <Dropdown.Item href="#/En">En</Dropdown.Item>
                </DropdownButton>
              </div>
            </div> 
          </div>
        </div>
          <div className='container'>
            <div className='header'>
              <div className='header-main'>
                <NavLink to={ROUTES.home} className='header-main-logo'>Exclusive</NavLink>
                <nav className='header-main-nav'>
                  <NavLink to={ROUTES.home}>Home</NavLink>
                  <NavLink to={ROUTES.contact}>Contact</NavLink>
                  <NavLink to={ROUTES.about}>About</NavLink>
                  <NavLink to={ROUTES.login}>Sign up</NavLink>
                </nav>
                <div className='header-main-form'>
                  <form className='header-main-search'>
                    <label></label>
                    <input type='text'></input>
                  </form>
                  <Icon iconname='heart small' width={'32'} height={'32'} />
                  <Icon iconname='Cart1' width={'32'} height={'32'}/>
                </div>
              </div>
            </div>
          </div>
        </header>
   
  )
}

export default Header;
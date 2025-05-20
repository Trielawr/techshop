import React from 'react';
import '../Header/Header.scss';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../assets/utilits';

const Header = () => {
  return (
      <div className='container'>
      <header className='top-header'> 
        <div className='top-header-banner'>
          <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
          <NavLink to={ROUTES.home}>
            <span>ShopNow</span>
          </NavLink>
        </div>
        <div className='top-header-language'>
          <DropdownButton id="dropdown-basic-button" title="English">
            <Dropdown.Item href="#/Uk">Uk</Dropdown.Item>
            <Dropdown.Item href="#/En">En</Dropdown.Item>
        </DropdownButton>
        </div>
        </header>
    </div>
  )
}

export default Header;
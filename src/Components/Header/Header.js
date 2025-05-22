import { useState } from 'react';
import { useFormik } from "formik";
import '../Header/Header.scss';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Icon from '../Icon/Icon';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../assets/utilits';
import { validationSchema } from '../../assets/utilits';

const Header = () => {

  const [find, setFind] = useState('');
  const [disabled, setDisabled] = useState('false');
  
  const onChangeForm = () => {
    setFind('');
    setDisabled('true');
  }

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      search: find || ""
    },
    validationSchema: validationSchema,
    onSubmit: () => {
      onChangeForm();
      formik.resetForm();
    }
  }
  );
 
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
                  <ul className='header-main-link'>
                    <li><NavLink to={ROUTES.home}>Home</NavLink></li>
                    <li><NavLink to={ROUTES.contact}>Contact</NavLink></li>
                    <li><NavLink to={ROUTES.about}>About</NavLink></li>
                    <li><NavLink to={ROUTES.login}>Sign up</NavLink></li>
                  </ul> 
                </nav>
                <div className='header-main-form'>
                  <form onSubmit={ formik.handleSubmit } className='header-main-search'>
                    <input
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name= "search"
                      type='search'
                      value={ formik.values.find }
                      placeholder='What are you looking for?' />
                      {/* <Button
                        className='yellow-btn'
                        text='sent'
                        type='submit'
                        disabled={ formik.errors.find }
                    /> */}
                        { (formik.errors.find && formik.touched.find) ? <p className='errors'>{ formik.errors.find } </p>: null }
                    {/* <input type='text' placeholder='What are you looking for?'/> */}
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
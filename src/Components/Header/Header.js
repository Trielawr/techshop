import { useState } from 'react';
import { Field, Formik, useFormik } from "formik";
import '../Header/Header.scss';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Icon from '../Icon/Icon';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../assets/utilits';
import { validationSchema } from '../../assets/utilits';

const Header = () => {

  const [find, setFind] = useState('');
  
  const initialValues = { find: '' }

  const handleSubmit = () => {
    setFind('');
  };

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
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}             
                  >
                  {({ isSbmitting }) => (
                    <Form className="d-flex">
                        <Field name='search'>
                          {({ field, meta }) => (
                            <>
                              <input
                                {...field}
                                type='text'
                                placeholder='What are you looking for?'
                                className={`form-control ${meta.touched && meta.error ? 'is-invalid' : ''}`}
                              />
                              {console.log(field.value)}
                              {meta.touched && meta.error && 
                              <div className='invalid-feadback'>
                                  {meta.error}
                              </div>
                              }
                            </>
                          )}
                        </Field>
                        <button type='submit' className='btn outline-success' disabled={ isSbmitting }>
                          <Icon iconname='Find' width={'24'} height={'24'} />
                        </button>
                      </Form>
                  )}
                  </Formik>
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
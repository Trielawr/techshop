import React from 'react'
import Registration from '../../Components/Components/Registration/Registration';
import Button from '../../Components/Components/Button/Button';
import LoginImg from '../../assets/img/login img.png'
// import { ROUTES } from '../../assets/utilits';
import './LoginPage.scss';

const LoginPage = () => {
  
  return (
    <div className='container login'>
      <img src={LoginImg} alt="Phone" />
      <div className='login-block'>
      <Registration
          title={'Log in to Exclusive'}
          phonemail={'Email or Phone Number'}
          password={'Password'}
        />
      <Button
        className={'botn-link'}
        text={'Forget Password?'}
        type='link' /> 
    </div>
  </div>
  )
}

export default LoginPage;
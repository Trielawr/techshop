import React, { useState } from 'react'
import Registration from '../../Components/Components/Registration/Registration';
import LoginImg from '../../assets/img/login img.png'
import './Create&LoginPage.scss';

const LoginPage = () => {
  
  return (
    <div className='container'>
      <Registration
          title={'Log in to Exclusive'}
          phonemail={'Email or Phone Number'}
          password={'Password'}
      />
    </div>
  )
}

export default LoginPage;
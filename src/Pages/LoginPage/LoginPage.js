import React from 'react'
import Registration from '../../Components/Components/Registration/Registration';
import LoginImg from '../../assets/img/login img.png'
import '../LoginPage/LoginPage.scss';

const islogin = false;

const LoginPage = () => {
  return (
    <div className='container'>
      <div className='login'>
       <img src={LoginImg} alt="Phone" />
       <div>
         {!islogin ? 
            <div>
              <Registration
                title={'Create an account'}
                name={'Name'}
                phonemail={'Email or Phone Number'}
                password={'Password'}
              />
              </div>
         : 
            <div>
              <Registration
                title={'Log in to Exclusive'}
                phonemail={'Email or Phone Number'}
                password={'Password'}
              /></div>}
      </div>
     </div>
    </div>
  )
}

export default LoginPage;
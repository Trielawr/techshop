import React, { useState } from 'react'
import Registration from '../../Components/Components/Registration/Registration';
import Button from '../../Components/Components/Button/Button';
import Icon from '../../Components/Components/Icon/Icon';
import { ROUTES } from '../../assets/utilits';
import LoginImg from '../../assets/img/login img.png'
import './CreatePage.scss';

const CreatePage = () => {

 const [registered, setRegistered] = useState(false);

  return (
    <div className='container create'>
      <img src={LoginImg} alt="Phone" />
      <div className='create-block'>
        <Registration
            title={'Create an account'}
            username={'Name'}
            phonemail={'Email or Phone Number'}
            password={'Password'}
            registered={registered}
            setRegistered={setRegistered}
        />
        <Button
          className={'botn-transparent'}
          text={
            <div className='google-signup'>
              <Icon iconname='Icon-Google' width={'24'} height={'24'} />
              <span>Sign up with Google</span>
            </div>
          }
          type='button'
        />
        <div className='create-login-link'>
          <p>Already have account?</p>
          <Button
            className={'botn-link'}
            text={'Log in'}
            href={ROUTES.login}
            type='link'
            onClick={() => setRegistered(!registered)}
          />
        </div>
      </div>
    </div>
  )
}

export default CreatePage;
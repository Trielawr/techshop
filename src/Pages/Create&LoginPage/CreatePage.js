import React, { useState } from 'react'
import Registration from '../../Components/Components/Registration/Registration';
import LoginImg from '../../assets/img/login img.png'
import './Create&LoginPage.scss';

const CreatePage = () => {

 const [registered, setRegistered] = useState(false);

  return (
    <div className='container'>
        <Registration
            title={'Create an account'}
            name={'Name'}
            phonemail={'Email or Phone Number'}
            password={'Password'}
            registered={registered}
            setRegistered={setRegistered}
        />
    </div>
  )
}

export default CreatePage;
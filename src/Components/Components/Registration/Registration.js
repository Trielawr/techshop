import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from '../Button/Button';
import '../Registration/Registration.scss';
import Icon from '../Icon/Icon';
import { ROUTES, validationSchemaLogin } from '../../../assets/utilits';
import LoginImg from '../../../assets/img/login img.png'
import { isLogin } from '../../../api/api';
import { Field, Formik } from 'formik';
import { addUser } from '../../../api/api';

const Registration = ({ title, username, phonemail, password, registered, setRegistered }) => {

  const initialValues = {
    username: '',
    phonemail: '',
    password: '',
  }

  const [loginName, setLoginName] = useState(initialValues.username);

  const handleSubmit = () => {
    isLogin(initialValues.username);
    if (isLogin) {
      setLoginName(initialValues.username);
      localStorage.setItem('name', loginName);
      setLoginName('');
    }
    

}

  return (
  <div className='login'>
      <img src={LoginImg} alt="Phone" />
      <div className='registration'>
        <h1>{title}</h1>
        <h6>Enter your details below</h6>

    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemaLogin}
      onSubmit={(values)=> addUser(values)}
    >
          {({ handleSubmit, handleChange, values, errors, touched }) => (
            <Form noValidate
            onSubmit={handleSubmit}>
              {username &&
                <Form.Group controlId='username'>
                  <Form.Control
                    name="username" 
                    size="lg"
                    type="text"
                    placeholder='Name'
                    value={values.username}
                    onChange={handleChange}
                    isInvalid={touched.username && !!errors.username}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.username}
                  </Form.Control.Feedback>
               </Form.Group>
              }
              {console.log('name', username)}
              <br />
              {phonemail &&
                <Form.Group controlId='phonemail'>
                  <Form.Control
                    name="phonemail" 
                    size="lg"
                    type="text"
                    placeholder="Email or Phone Number"
                    value={values.phonemail}
                    onChange={handleChange}
                    isInvalid={touched.phonemail && !!errors.phonemail}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.phonemail}
                  </Form.Control.Feedback>
               </Form.Group>
              }
              <br />
              {password &&
                <Form.Group controlId='password'>
                  <Form.Control
                    name="password" 
                    size="lg"
                    type="text"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    isInvalid={touched.password && !!errors.password}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.password}
                  </Form.Control.Feedback>
               </Form.Group>
              }
              {!username ?
                <div className='registration-login-button'>
                  <Button
                    className={'botn-orange'}
                    text={'Log in'}
                    type='submit'
                    // disabled={isSubmiting}
                  />
                  <Button
                    className={'botn-link'}
                    text={'Forget Password?'}
                    type='link' />
                </div>
                :
                <div className='registration-create-button'>
                  <Button
                    className={'botn-orange'}
                    text={'Create Account'}
                    type='button' />
                  <Button
                    className={'botn-transparent'}
                    text={
                      <div className='google-signup'>
                        <Icon iconname='Icon-Google' width={'24'} height={'24'} />
                        <span>Sign up with Google</span>
                      </div>}
                    type='button' />
                  <div className='registration-login-link'>
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
              }
            </Form>
          
       ) 
      }
    </Formik >
   </div> 
    </div>  
  )
}

export default Registration;
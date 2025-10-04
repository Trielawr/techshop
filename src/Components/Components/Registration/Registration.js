// import { useState } from 'react';
import { Form as FormBootstrap } from 'react-bootstrap';
import Button from '../Button/Button';
import '../Registration/Registration.scss';
import { validationSchemaLogin } from '../../../assets/utilits';
import { getUser, isLogin } from '../../../api/api';
import { Formik , Form} from 'formik';
import { addUser, isSignUp } from '../../../api/api';
import { useLocation } from 'react-router-dom';

const Registration = ({ title, username, phonemail, password, registered, setRegistered }) => {

  const initialValues = {
    username: '',
    phonemail: '',
    password: '',
  }

  const location = useLocation();
  const isRegistrated = location.pathname.includes('login');
  

  return (
  <div className='form-block'>
      <div className='registration'>
        <h1>{title}</h1>
        <h6>Enter your details below</h6>
    <Formik
          initialValues={initialValues}
          validationSchema={validationSchemaLogin}
          onSubmit={async (values, { resetForm, setFieldError }) => {
           console.log('isRegistrated', isRegistrated);
            if (!isRegistrated) {
              const exist = await isSignUp(values);
              if (exist) {
                setFieldError('username', "Такий користувач вже існує");
                return
              }
              addUser(values);
            } else {
              console.log('isRegistrated login', isRegistrated);
              const exist = await isLogin(values);
              if (!exist) {
                setFieldError('phonemail', "Такої пошти або номера не існує");
                setFieldError('password', "Пароль не вірний");
                return
              }
              getUser(values);
            }
            resetForm();
          }  
        }
    >
          {({ handleChange, values, errors, touched }) => (
            <Form noValidate>
              {username &&
                <FormBootstrap.Group controlId='username'>
                  <FormBootstrap.Control
                    name="username" 
                    size="lg"
                    type="text"
                    placeholder='Name'
                    value={values.username}
                    onChange={handleChange}
                    isInvalid={touched.username && !!errors.username}
                  />
                  <FormBootstrap.Control.Feedback type='invalid'>
                    {errors.username}
                  </FormBootstrap.Control.Feedback>
               </FormBootstrap.Group>
              }
              <br />
              {phonemail &&
                <FormBootstrap.Group controlId='phonemail'>
                  <FormBootstrap.Control
                    name="phonemail" 
                    size="lg"
                    type="text"
                    placeholder="Email or Phone Number"
                    value={values.phonemail}
                    onChange={handleChange}
                    isInvalid={touched.phonemail && !!errors.phonemail}
                  />
                  <FormBootstrap.Control.Feedback type='invalid'>
                    {errors.phonemail}
                  </FormBootstrap.Control.Feedback>
               </FormBootstrap.Group>
              }
              <br />
              {password &&
                <FormBootstrap.Group controlId='password'>
                  <FormBootstrap.Control
                    name="password" 
                    size="lg"
                    type="text"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    isInvalid={touched.password && !!errors.password}
                  />
                  <FormBootstrap.Control.Feedback type='invalid'>
                    {errors.password}
                  </FormBootstrap.Control.Feedback>
               </FormBootstrap.Group>
              }             
              <div className={isRegistrated ? 'registration-login-button':'registration-create-button' }>
                  <Button
                    className={'botn-orange'}
                    text={isRegistrated ? 'Log in':'Create Account' }
                    type="submit"
                  />
                </div>
            </Form>
       ) 
      }
    </Formik >
   </div> 
    </div>  
  )
}

export default Registration;
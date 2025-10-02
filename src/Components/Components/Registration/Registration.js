// import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from '../Button/Button';
import '../Registration/Registration.scss';
import { validationSchemaLogin } from '../../../assets/utilits';
import { isLogin } from '../../../api/api';
import { Formik } from 'formik';
import { addUser, isSignUp } from '../../../api/api';

const Registration = ({ title, username, phonemail, password, registered, setRegistered }) => {

  const initialValues = {
    username: '',
    phonemail: '',
    password: '',
  }

  // const [loginName, setLoginName] = useState(initialValues.username);

//   const handleSubmit = () => {
//     isLogin(initialValues.username);
//     if (isLogin) {
//       setLoginName(initialValues.username);
//       localStorage.setItem('name', loginName);
//       setLoginName('');
//     }
    

  // }

  return (
  <div className='form-block'>
      <div className='registration'>
        <h1>{title}</h1>
        <h6>Enter your details below</h6>
    <Formik
          initialValues={initialValues}
          validationSchema={validationSchemaLogin}
          onSubmit={async (values, { resetForm, setFieldError }) => {
            if (username) {
              const exist = await isSignUp(values);
              if (exist) {
                setFieldError('username', "Такий користувач вже існує");
                return
              }
              addUser(values);
            } else {
              const exist = await isLogin(values);
              if (!exist) {
                setFieldError('phonemail', "Такої пошти або номера не існує");
                setFieldError('password', "Пароль не вірний");
                return
              }
            }
            resetForm();
          }}
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
                  {console.log('registration values',values)}
                  <Button
                    className={'botn-orange'}
                    text={'Log in'}
                    type="submit"
                    // disabled={isSubmiting}
                  />
                </div>
                :
                <div className='registration-create-button'>
                  <Button
                    className={'botn-orange'}
                    text={'Create Account'}
                    type='submit' />
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
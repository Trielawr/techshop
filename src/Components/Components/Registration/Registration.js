import Form from 'react-bootstrap/Form';
import Button from '../Button/Button';
import '../Registration/Registration.scss';
import Icon from '../Icon/Icon';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../assets/utilits';
import LoginImg from '../../../assets/img/login img.png'

const Registration = ({ title, name, phonemail, password, registered, setRegistered }) => {

  return (
      <div className='login'>
       <img src={LoginImg} alt="Phone" />
      <div className='registration'>
          <h1>{title}</h1>
          <h6>Enter your details below</h6>
          <Form>
            { name && <Form.Control size="lg" type="text" placeholder={`${name}`} />}
            <br />
            { phonemail && <Form.Control  placeholder={`${phonemail}`} />}
            <br />
            { password && <Form.Control size="sm" type="password" placeholder={`${password}`} />}
              {!name ? 
                <div className='registration-login-button'>
                  <Button
                    className={'botn-orange'}
                    text={'Log in'}
                    type='button'
                    // onClick={<NavLink to={ROUTES.login}/>}
                  />
                  <Button
                    className={'botn-link'}
                    text={'Forget Password?'}
                    type='link'/>
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
        </div>
      </div>
  )
}

export default Registration;
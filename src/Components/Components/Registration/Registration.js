import Form from 'react-bootstrap/Form';
import Button from '../Button/Button';
import '../Registration/Registration.scss';

const Registration = ({ title, name, phonemail, password }) => {
  return (
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
                    type='button'/>
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
                    text={'Sign up with Google'}
                    type='button' />
                  <div className='registration-login-link'> 
                    <p>Already have account?</p>
                    <Button
                      className={'botn-link'}
                      text={'Log in'}
                      type='link'/>
                  </div>
                </div> 
            }
          </Form>
      </div>
  )
}

export default Registration;
import Form from 'react-bootstrap/Form';

const Registration = ({title}) => {
  return (
      <div>
          <h1>{title}</h1>
          <h6>Enter your details below</h6>
              <Form>
                <Form.Control size="lg" type="text" placeholder="Name" />
                <br />
                <Form.Control  placeholder="Email or Phone Number" />
                <br />
                <Form.Control size="sm" type="password" placeholder="Password" />
              </Form>
      </div>
  )
}

export default Registration;
import '../Footer/Footer.scss';
import { NavLink } from 'react-router-dom';
import { ROUTES, validationSchemaEmail } from '../../assets/utilits';
import { footerData } from '../../Date/webdata';
import Icon from '../Icon/Icon';
import FooterLinkList from './FooterLinkList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FieldForm from '../FieldForm/FieldForm';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <ul className='footer-list p-0 m-0'>
          <Container >
            <Row className="footer-list-row" >
              <Col className="footer-list-col col-auto">
                <li className='footer-list-logo'><NavLink to={ROUTES.home} >Exclusive</NavLink></li>
                <li className='footer-list-subscribe'><NavLink to={ROUTES.home} >Subscribe</NavLink></li>
                <li className='footer-list-discount'><NavLink to={ROUTES.home} >Get 10% off your first order</NavLink></li> 
                <li className='footer-list-email'>
                  <FieldForm
                    validationSchema={validationSchemaEmail}
                    iconname={'icon-send'}
                    item={'email'}
                    text={'Enter your email'}
                    btnClassName={'email-btn'} />
                </li>
              </Col>
              {
                footerData.map((item, index) => 
                  <Col className="footer-list-col col-auto">
                    <div className="footer-list-center">
                      <li key={ index }>
                        <h5 className='footer-list-title'>{item.title}</h5>
                        <FooterLinkList item={ item.item }/> 
                      </li>
                    </div>
                  </Col>        
                )
              }   
            </Row>
          </Container>
        </ul>
        <div className='footer-copyright'>
          <p><Icon iconname='icon-copyright' width={'20'} height={'20'}/>
            <span>Copyright Rimel 2022. All right reserved</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
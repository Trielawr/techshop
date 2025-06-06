import React from 'react';
import '../Footer/Footer.scss';
import { NavLink } from 'react-router-dom';
import { ROUTES, validationSchemaEmail } from '../../assets/utilits';
import { footerData } from '../../Date/webdata';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import FooterLinkList from './FooterLinkList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FieldForm from '../FieldForm/FieldForm';
import imgAS from '../../assets/img/download-appstore.png';
import imgGP from '../../assets/img/download-googleplay.png';
import imgCode from '../../assets/img/Qr Code.png';


const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <ul className='footer-list p-0 m-0'>
          <Container >
            <Row className="justify-content-md-between" >
              <Col>
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
                  <Col>
                    <li key={ index }>
                      <h5 className='footer-list-title'>{item.title}</h5>
                      <FooterLinkList item={ item.item }/> 
                    </li>
                  </Col>        
                )
              }   
              {/* <Col>
                <li className='footer-qr'>
                  <img src={imgCode} alt='QR Code' />
                </li>
                <li className='footer-download'>
                  <div className='footer-download-img'>
                    <Button
                        type={'link'}
                        href={'https://www.apple.com/app-store/'}
                        text={<img src={imgAS} alt='App Store' />}
                    />
                    <Button
                        type={'link'}
                        href={'https://play.google.com/store/games?device=windows'}
                        text={<img src={imgGP} alt='Google Play' />}
                    /> 
                  </div>
                </li>
              </Col> */}
              {/* <Col>
                <li>
                  <Button
                        type={'link'}
                        href={'https://www.facebook.com/'}
                        text={<Icon iconname='Icon-Facebook' width={'32'} height={'32'} />}
                  />
                </li>
                <li>
                  <Button
                        type={'link'}
                        href={'https://x.com/'}
                        text={<Icon iconname='Icon-Twitter' width={'32'} height={'32'} />}
                  />
                </li>
                <li>
                <Button
                        type={'link'}
                        href={'https://www.instagram.com/'}
                        text={<Icon iconname='icon-instagram' width={'32'} height={'32'} />}
                  />
                </li>
                <li>
                <Button
                        type={'link'}
                        href={'https://www.linkedin.com/'}
                        text={<Icon iconname='Icon-Linkedin' width={'32'} height={'32'} />}
                  />
                </li>
              </Col> */}
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
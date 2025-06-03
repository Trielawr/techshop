import React from 'react';
import '../Footer/Footer.scss';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../assets/utilits';
import { footerData } from '../../Date/webdata';
import Icon from '../Icon/Icon';
import FooterLinkList from './FooterLinkList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
            </Row>
          </Container>
        </ul>
        <div className='footer-copyright'>
          <Icon iconname='icon-copyright' width={'20'} height={'20'}/>
          <h5>Copyright Rimel 2022. All right reserved</h5>
        </div>
      </div>
    </div>
  )
}

export default Footer;
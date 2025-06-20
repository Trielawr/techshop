
import Slider from "react-slick";
import './ProductListSection.scss';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Advertisement from "../Advertisement/Advertisement";
import Apple from '../../assets/img/Apple_gray_logo 1.png';
import Phone from '../../assets/img/Phone.png';

const ProductListSection = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };     
  return (
      <div className='container'>
          <div  className='product'>
            <div className='product-list'>
                <Nav className="sidebar">
                    <NavDropdown title="Woman’s Fashion" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>    
                    <NavDropdown title="Men’s Fashion" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>       
                    <Nav.Link href="#home">Electronics</Nav.Link>
                    <Nav.Link href="#link">Home & Lifestyle</Nav.Link>
                    <Nav.Link href="#link">Medicine</Nav.Link>
                    <Nav.Link href="#link">Sports & Outdoor</Nav.Link>
                    <Nav.Link href="#link">Baby’s & Toys</Nav.Link>
                    <Nav.Link href="#link">Groceries & Pets</Nav.Link>
                    <Nav.Link href="#link">Health & Beauty</Nav.Link>
                </Nav>
              </div>
              <div className="advertisement-section">          
              <div className="slider-container">           
                 <Slider {...settings}>
                    <div>
                        <p><Advertisement
                            model={'iPhone 10 Series'}
                                  text={'Up to 30% off Voucher'}
                                  logo={Apple}
                                  img={Phone}
                              />
                        </p>
                    </div>
                    <div>
                        <p><Advertisement
                                model={'iPhone 11 Series'}
                                text={'Up to 25% off Voucher'}
                                logo={Apple}
                                img={Phone}
                            />
                        </p>
                    </div>
                    <div>
                        <p><Advertisement
                                model={'iPhone 12 Series'}
                                text={'Up to 20% off Voucher'}
                                logo={Apple}
                                img={Phone}
                            />
                        </p>
                    </div>
                    <div>
                        <p><Advertisement
                                model={'iPhone 13 Series'}
                                text={'Up to 15% off Voucher'}
                                logo={Apple}
                                img={Phone}
                            />
                        </p>
                    </div>
                    <div>
                        <p><Advertisement
                                model={'iPhone 14 Series'}
                                text={'Up to 10% off Voucher'}
                                logo={Apple}
                                img={Phone}
                            />
                        </p>
                    </div>
                </Slider> 
                   </div>
              </div>
          </div> 
    </div>
  )
}

export default ProductListSection;
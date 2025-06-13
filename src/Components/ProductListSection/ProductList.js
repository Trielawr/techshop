
import Slider from "react-slick";
import './ProductList.scss';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Advertisement from "../Advertisement/Advertisement";

const ProductList = () => {

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    //   };     
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
              <div className="advertisement">
              <div className="slider-container">
                  <p>jhjhghjgjgj</p>
                {/* <Slider {...settings}>
                    <div>
                    <h3>1</h3>
                    </div>
                    <div>
                    <h3>2</h3>
                    </div>
                    <div>
                    <h3>3</h3>
                    </div>
                    <div>
                    <h3>4</h3>
                    </div>
                    <div>
                    <h3>5</h3>
                    </div>
                    <div>
                    <h3>6</h3>
                    </div>
                </Slider> */}
             </div>
                  
              </div>
          </div>
    </div>
  )
}

export default ProductList;
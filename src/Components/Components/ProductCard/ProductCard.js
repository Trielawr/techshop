import React from 'react'
import './ProductCard.scss'
import Icon from '../Icon/Icon';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductCard = ({ text, sale, price, iconname, imgname, reviews }) => {
  
  let newprice = price - price * (sale / 100);

  return (
    <div className='product-card'>
      <Card className='product-card-wrapper'>
        <div className='product-card-img'>
          <Card.Img className='img-fluid' variant="top" src={`/img/${imgname}.png`} alt={`${imgname}`}/>
          {sale && <p className='sale'>{'-' + sale + '%'}</p> }
          <ul className='product-card-icons'>
            <li className='product-card-hearticon'><Icon iconname={'Fill Heart'} width={'34'} height={'34'}/></li>
            <li className='product-card-eyeicon'><Icon iconname={'Fill Eye'} width={'34'} height={'34'}/></li>
          </ul>
          <Button className='hidden-button' variant="primary">Add To Cart</Button>
        </div>
          <Card.Body>
            <Card.Title>{text}</Card.Title>
            <div>
              <div className='product-card-price'>
              <p className={sale ? 'product-card-newprice' : 'product-card-noprice'}>
                {`$` + newprice}
              </p>
              <p className={sale ? 'product-card-oldprice' : 'product-card-regularprice'}>
                {`$` + price + '   '}
              </p>
              </div>
              <div className='product-card-reviews'>
                <Icon iconname={iconname} width={'100'} height={'20'}></Icon>
                <span>{'(' + reviews + ')'}</span>
              </div>
           </div> 
          </Card.Body>
        </Card>
    </div>
  )
}

export default ProductCard;
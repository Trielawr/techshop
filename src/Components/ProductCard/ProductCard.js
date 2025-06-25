import React from 'react'
import './ProductCard.scss'
import Icon from '../Icon/Icon';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductCard = ({ text, sale, price, iconname, imgname, reviews}) => {
    console.log('sale', sale/100);
    console.log('price', price);
    const newprice = price-price * (sale / 100);
    console.log('newprize', newprice);
    console.log('imgname', imgname);
  return (
      <div className='product-card'>
      <Card style={{ width: '250px' }}>
        <div className='product-card-img'>
          <Card.Img variant="top" src={`/img/${imgname}.png`} alt={`${imgname}`}/>
          {sale && <p className='sale'>{'-' + sale + '%'}</p> }
          <div className='product-card-icons'>
            <Icon  iconname={'Fill Heart'} width={'34'} height={'34'}/>
            <Icon iconname={'Fill Eye'} width={'34'} height={'34'}/>
          </div>
          <Button className='hidden-button' variant="primary">Add To Cart</Button>
        </div>
          <Card.Body>
            <Card.Title>{text}</Card.Title>
          <Card.Text>
            <div className='product-card-price'>
              <p className='product-card-newprice'>{`$` + newprice}</p>
              <p className='product-card-oldprice'>{`$` + price + '   '}</p>
            </div>
            <div className='product-card-reviews'>
              <Icon iconname={iconname} width={'100'} height={'20'}></Icon>
              <span>{'(' + reviews + ')'}</span>
            </div>
            </Card.Text> 
        </Card.Body>
        </Card>
    </div>
  )
}

export default ProductCard;
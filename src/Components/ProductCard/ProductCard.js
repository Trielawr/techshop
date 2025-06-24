import React from 'react'
import './ProductCard.scss'
import Icon from '../Icon/Icon';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import imgname from '../../assets/img/havit.png'

const ProductCard = ({ text, sale, prize, iconname, imgname }) => {
    console.log('sale', sale/100);
    console.log('prize', prize);
    const newprize = prize-prize * (sale / 100);
    console.log('newprize', newprize);
    console.log('imgname', imgname);
  return (
      <div className='product-card'>
        <Card style={{ width: '18rem' }}>
              <Card.Img variant={`${imgname}`} src={`../../assets/img/${imgname}.png`} />
        <Card.Body>
            <Card.Title>{text}</Card.Title>
            <Card.Text>
                {prize}  {newprize}
                <Icon iconname={iconname} ></Icon>
            </Card.Text>
            <Button variant="primary">Add To Cart</Button>
        </Card.Body>
        </Card>
    </div>
  )
}

export default ProductCard;
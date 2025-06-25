import React from 'react'
import CategoryDivider from '../CategoryDivider/CategoryDivider';
import CountdownTimer from '../CountdownTimer/CountdownTimer';
import ProductCard from '../ProductCard/ProductCard';
import './FlashSalesSection.scss'

const FlashSalesSection = () => {
  return (
    <div className='container'>
      <div className='flash-sales'>
        <div className='flash-sales-header'>
            <CategoryDivider text={"Today's"} />
            <h2>Flash Sales</h2>
        </div>
        <CountdownTimer targetDate='2025-07-31T23:59:59'/>
      </div>
      <ProductCard
        text='HAVIT HV-G92 Gamepad'
        sale={'40'}
        price={'160'}
        iconname={'Five star'}
        imgname={'havit'}
        reviews={'88'}/>
    </div>
  )
}

export default FlashSalesSection;
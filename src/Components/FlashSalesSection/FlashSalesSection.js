import React from 'react'
import CategoryDivider from '../CategoryDivider/CategoryDivider';
import CountdownTimer from '../CountdownTimer/CountdownTimer';

const FlashSalesSection = () => {
  return (
      <div className='container'>
          <CategoryDivider text={"Today's"} />
          <CountdownTimer targetDate='2025-07-31T23:59:59'/>
    </div>
  )
}

export default FlashSalesSection;
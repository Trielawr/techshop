import React from 'react'
import './CategoryDivider.scss';

const CategoryDivider = ({ text }) => {
  return (
      <div className='category-divider'>
          <p className='category-divider-text'>{text}</p>
      </div>
  )
}

export default CategoryDivider;
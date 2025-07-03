import React from 'react'
import CategoryDivider from '../CategoryDivider/CategoryDivider';
import '../CategorySection/CategorySection.scss'

const CategorySection = () => {
  return (
      <div className='container'>
          <div className='categories'>
              <CategoryDivider text={"Categories"} />  
              <h2>Browse By Category</h2>
          </div>
         
    </div>
  )
}

export default CategorySection;
import CategoryDivider from '../../Components/CategoryDivider/CategoryDivider';
import './CategorySection.scss'
import Carusel from '../../Components/Carusel/Carusel';
import { productData } from '../../../Date/productdata';

const CategorySection = () => {
  return (
      <div className='container'>
        <div className='categories'>
        <CategoryDivider text={"Categories"} />  
        <h2>Browse By Category</h2>
        {/* <Carusel CaruselItem={productData} /> */}
      </div>
         
    </div>
  )
}

export default CategorySection;
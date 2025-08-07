import CategoryDivider from '../../Components/CategoryDivider/CategoryDivider';
import './CategorySection.scss';
import CategoryCard from '../../Components/CategoryCard/CategoryCard';
import Carusel from '../../Components/Carusel/Carusel';
import { categoryData } from '../../../Date/productdata';
import { settings } from '../../../assets/utilits';

const CategorySection = () => {
  return (
      <div className='container'>
        <div className='category'>
          <CategoryDivider text={"Categories"} />  
          <h2>Browse By Category</h2>
          <Carusel
            caruselDate={categoryData}
            CaruselItem={CategoryCard}
            className={'category-slider'}
            settings={settings}
          />
      </div>
    </div>
  )
}

export default CategorySection;
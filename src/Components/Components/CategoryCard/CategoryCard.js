import Icon from '../Icon/Icon';
import './CategoryCard.scss';

const CategoryCard = ({text, iconname}) => {
  return (
      <div children='category-card-wrapper'>
        <div className='category-card-container'>
          <div className="category-card">
              <Icon iconname={iconname} width={'56'} height={'56'} />
              <p>{text}</p>
          </div>    
        </div>
      </div>
  )
}

export default CategoryCard;
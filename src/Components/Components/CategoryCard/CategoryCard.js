import Icon from '../Icon/Icon';
import './CategoryCard.scss';

const CategoryCard = ({spantext, text, iconname, width, height}) => {
  return (
      <div className='category-card-wrapper'>
        <div className='category-card-container'>
          <div className="category-card">
              <Icon iconname={iconname} width={width} height={height} />
              <span>{spantext}</span>
              <p>{text}</p>
          </div>    
        </div>
      </div>
  )
}

export default CategoryCard;
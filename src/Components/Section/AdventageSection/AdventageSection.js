import React, { useEffect, useState } from 'react'
import CategoryCard from '../../Components/CategoryCard/CategoryCard';
import Icon from '../../Components/Icon/Icon';
import './AdventageSection.scss';

const AdventageSection = () => {

  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  useEffect(() => {
    const buttonUpVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
    buttonUpVisibility();
  },[])

  return (
      <div className='container'>
          <div className='adventage'> 
            <CategoryCard
                spantext={"FREE AND FAST DELIVERY" }
                text={'Free delivery for all orders over $140'}
                iconname={"delivery"}
                width={'80'}
                height={'80'}/>
            <CategoryCard
                spantext={"24/7 CUSTOMER SERVICE" }
                text={'Friendly 24/7 customer support'}
                iconname={"earphone"}
                width={'80'}
                height={'80'}
              />
            <CategoryCard
                spantext={"MONEY BACK GUARANTEE" }
                text={'We reurn money within 30 days'}
                iconname={"guarantee"}
                width={'80'}
                height={'80'}
        />
        { isVisible && 
        <button
            className='arrows-custom arrows-toscroll'
            style={{display: isVisible ? 'flex': 'none'}}
                onClick={()=> {scrollToTop()}}>
                <Icon iconname={'icons_arrow-left'} width={'24'} height={'24'}/>
          </button>
        }

          </div>

    </div>
  )
}

export default AdventageSection;
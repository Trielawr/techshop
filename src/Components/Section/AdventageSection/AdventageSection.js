import React from 'react'
import CategoryCard from '../../Components/CategoryCard/CategoryCard';
import './AdventageSection.scss';

const AdventageSection = () => {
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
          </div>
    </div>
  )
}

export default AdventageSection;
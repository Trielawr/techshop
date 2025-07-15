import React from 'react'
import './AdvertisementSection.scss';
import Advertisement from '../../Components/Advertisement/Advertisement';
import Boombox from '../../../assets/img/boombox.png';

const AdvertisementSection = () => {
  return (
    <div className='container'>
      <div className='advertisement-section'>
          <Advertisement
                    model={'Categories'}
                    text={'Enhance Your Music Experience'}
                    buttontype={'button'}
                    countdown={true}
                    img={Boombox}
          />
        
      </div>
      </div>
  )
}

export default AdvertisementSection;
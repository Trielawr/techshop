import React from 'react'
import './FeaturedSection.scss';
import CategoryDivider from '../../Components/CategoryDivider/CategoryDivider';
import Advertisement from '../../Components/Advertisement/Advertisement';
import PlayStation5 from '../../../assets/img/play-station-5.png';
import WomanCollection from '../../../assets/img/woman-collection.png';
import Speakers from '../../../assets/img/speakers.png';
import Gucci from '../../../assets/img/gucci.png';
    

const FeaturedSection = () => {
  return (
      <div className='container featured'>
          <CategoryDivider text={'Featured'} />
          <h2>New Arrival</h2>
          <div className='featured-showblock'>
            <div class="featured-item1">
              <Advertisement
                model={'PlayStation 5'}
                text={'Black and White version of the PS5 coming out on sale.'}
                buttontype={'link'}
                countdown={false}
                img={PlayStation5}
              />
            </div>
            <div class="featured-item2">
              <Advertisement
                model={'Women’s Collections'}
                text={'Featured woman collections that give you another vibe.'}
                buttontype={'link'}
                countdown={false}
                img={WomanCollection}
              />
            </div>
            <div class="featured-item3">
              <Advertisement
                model={'Speakers'}
                text={'Amazon wireless speakers'}
                buttontype={'link'}
                countdown={false}
                img={Speakers}
              />
            </div>
            <div class="featured-item4">
              <Advertisement
                model={'Perfume'}
                text={'GUCCI INTENSE OUD EDP'}
                buttontype={'link'}
                countdown={false}
                img={Gucci}
              />
            </div>
          </div>
    </div>
  )
}

export default FeaturedSection;
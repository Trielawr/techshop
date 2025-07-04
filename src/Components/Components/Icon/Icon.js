import React from 'react';
import sprite from '../../../assets/svg/sprite.svg';
import './Icon.scss'

const Icon = ({ iconname, width, height }) => {
  return (
    <svg className='icon' width={width} height={height}>
        <use href={`${ sprite }#${ iconname }`}/>
    </svg>   
  )
}

export default Icon;
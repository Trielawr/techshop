import React from 'react';
import '../Button/Button.scss';

const Button = ({type, text, className, disabled, onClick}) => {
  return (
    <div>
          <button
            className={`btn ${className}`}
            disabled={disabled}
            onClick={onClick}
            type={ type || 'button' }>
            { text }
          </button>   
    </div>
  )
}

export default Button;
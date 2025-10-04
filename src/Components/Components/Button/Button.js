import './Button.scss';

const Button = ({ type, text, className, disabled, onClick, href }) => {
  return (
    <>
      {(type !== 'button' && type !== 'submit') &&
        <a
          className={className}
          href={`${href}`}>
          { text }
        </a>
      }
      {(type === 'button' || type === 'submit') &&
        <button
          className={`botn ${className}`}
          disabled={disabled}
          onClick={onClick}
          type={type || "button"}
        >
          { text }
        </button> 
      }
    </>
  )
}

export default Button;
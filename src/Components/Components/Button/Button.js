import './Button.scss';

const Button = ({ type, text, className, disabled, onClick, href }) => {
  console.log('type', type);
  return (
    <>
      {type === 'link' &&
        <a
          className={className}
          href={`${href}`}>
          { text }
        </a>
      }
      {type === 'button' &&
        <button
          className={`botn ${className}`}
          disabled={disabled}
          onClick={onClick}
          // type={type || 'button'}
        >
          { text }
        </button> 
      }
    </>
  )
}

export default Button;
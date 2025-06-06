import '../Button/Button.scss';

const Button = ({type, text, className, disabled, onClick, href}) => {
  return (
    <div>
     { console.log(type)}
      {!type==='link'?
          <button
            className={`btn_c ${className}`}
            disabled={disabled}
            onClick={onClick}
            type={ type || 'button' }>
            { text }
          </button> 
        :
        <a
        className={className}
        href={`${href}`}>
        { text }
        </a>
      }
    </div>
  )
}

export default Button;
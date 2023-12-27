import React from 'react'

const Button = (
    {
        isDisabled,btntype,containerStyle,textStyle,righticon,title,handleClick
    }
) => {
  return (
    <button Disabled ={isDisabled ?? false} 
    type={'btntype' || "button"} 
    className={`custom-btn ${containerStyle}`}
    onClick={handleClick}
    >
      <span className='flex-1'>{title}</span>
        {righticon && <div className='relative w-6 h-6'>
            {righticon}
        </div>
        }   
    </button>
  )
}

export default Button

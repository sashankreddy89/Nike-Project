import React from 'react'

const Button1 = ({imgURL,label}) => {
  return (
    <div className='flex px-7 py-3 text-white justify-center items-center rounded-full bg-coral-red'>
        <button >
        {label}
    </button>
    <img src={imgURL} 
    alt="right-arrow"
    className='ml-2 rounded-full w-5 h-5' />
    </div>
  )
}

export default Button1
import React from 'react'
import { star } from '../assets/icons'

const ReviewBox = ({key,imgURL,customerName,rating,feedback}) => {
  return (
    <div key={key} className='flex flex-col justify-center items-center'>
        <img src={imgURL} 
        alt={customerName}
        width={120}
        height={120}
         className='rounded-full border-none'/>
        <div>
        <p className='lg:max-w-sm text-center mt-4 info-text max-w-sm'> {feedback}</p>
        <div className='mt-3 flex justify-center items-center gap-2.5'>
        <img
          src={star}
          width={24}
          height={24}
          alt='rating star'
          className='object-contain m-0'
        />
        <p className='text-xl font-montserrat text-slate-gray'>({rating})</p>
      </div>
        <h4 className='text-center mt-3 font-bolds text-2xl'>{customerName}</h4>
        </div>
    </div>
  )
}

export default ReviewBox
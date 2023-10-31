import React from 'react'

function Comment({data}) {
    const { name, text, replies }=data;

  return (
    <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
          <img 
          className='w-8 h-8'
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4MmBOmXsxgjBhhfDh4FSeM9wsFRgC_2uPrE362dA&s" 
          alt="user" />
          <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
          </div>
    </div>
  )
}

export default Comment
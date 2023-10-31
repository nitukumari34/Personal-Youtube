import React from 'react'

function ChatMessage({name,message}) {
  return (
    <div className='flex items-center shadow-sm p-2'>
      <img className='h-8' 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4MmBOmXsxgjBhhfDh4FSeM9wsFRgC_2uPrE362dA&s"
       alt="user" />
       <span className='px-2 font-bold'>{name}</span>
       <span>{message}</span>
    </div>
  )
}

export default ChatMessage
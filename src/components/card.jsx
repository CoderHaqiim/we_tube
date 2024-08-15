import React from 'react'

export default function Card({title,author,img}) {
  return (
    <div className='w-[350px] mb-[20px] cursor-pointer h-auto p-padding2 flex flex-col h-auto gap-gap2 items-center transition duration-[0.3s] rounded-rounded2 hover:bg-glass
      lg:w-[377px] md:pb-[50px]'>
      <div className={`w-full rounded-rounded2 bg-cover h-auto`} style={{aspectRatio:"16/9", backgroundImage:`url(${img})`}}></div>
      <div className='px-padding1'>
        <div className='text-left font-bold w-full text-textcolor'>{title}</div>
        <div className='text-glass2 text-sm2 font-bold'>{author}</div>
      </div>
    </div>
  )
}

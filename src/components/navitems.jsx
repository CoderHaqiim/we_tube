import React from 'react'

export default function Navitems({title,image}) {
  return (
    <li className='w-full p-padding1 py-padding3 h-auto gap-gap1 text-textcolor text-sm justify-center rounded-rounded1 items-center flex flex-col hover:bg-glass'>
        <div className='w-[24px] h-[24px]'>
          <img src={image} alt="icons" />
        </div>
        <div className='text-sm'>{title}</div>
    </li>
  )
}

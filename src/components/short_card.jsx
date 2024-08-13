import React from 'react'

export default function Shortcard({author,img}) {
  return (
    <div className='h-auto w-[220px] p-padding2 hover:bg-glass flex-shrink-0 rounded-rounded2'>
      <div className="h-auto w-full bg-cover rounded-rounded2" style={{aspectRatio:"9/16", backgroundImage:`url(${img})`}} ></div>
      <div className='text-textcolor'>
        <div>{author}</div>
        <div className='text-sm2 text-wrap text-textcolor'>Talking Bullshit for a living on a sunday and on a tuesday </div>
      </div>
    </div>
  )
}
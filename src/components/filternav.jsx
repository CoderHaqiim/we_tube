import React, { useState } from 'react'
import Button from './button'
import { categories } from '../db'

let iniScroll = 0;

export default function Filternav() {
  const [selected,setSelected] = useState(1)
  const [display,setDisplay] = useState(false)

  const getScroll = (e) =>{
    const object = e.target
      if(object.scrollLeft > iniScroll){
        setDisplay(true)
        iniScroll = object.scrollLeft
      }else{
          iniScroll = object.scrollLeft
      }
      if(iniScroll == 0){
        setDisplay(false)
      }
  }

  return (
    <div className="categories bg-basecolor flex items-center justify-center top-[54px] w-full fixed pr-padding6 h-[58px]">
      <div className=' top-[0px] left-[0px] z-[10] absolute h-full w-[100px]'>
        {display == true ? <div className='curtain p-padding4 flex justify-end'>
          <img src="/left.svg" alt="" />
        </div> : <></>}
      </div>
      <div onScroll={(e)=>{getScroll(e)}} className='filterbar flex justify-start h-full py-padding1 px-padding6 w-auto pr-[100px] items-center flex gap-gap2 overflow-x-scroll'>
        {
          categories.map(category =><Button key={category.id} setSelected = {setSelected} selected={selected} text={category.title} id={category.id}/>)
        }
      </div>
    </div>
  )
}

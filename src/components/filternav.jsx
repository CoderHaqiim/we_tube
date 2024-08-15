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
    <div className="categories bg-basecolor flex items-center justify-center top-[54px] w-full fixed h-[58px] 
    md:w-full md:pr-padding6">
      <div className=' top-[0px] left-[0px] z-[10] absolute h-full w-[150px]'>
        {display == true ? <div className='curtain pointer-none absolute top-0  left-[-3px] h-full p-padding4 w-[100px] flex justify-end
        md:w-[150px]'>
          <img src="/left.svg" alt="" />
        </div> : <></>}
      </div>
      <div className=' top-[0px] right-[30px] hidden z-[10] absolute h-full w-[120px] 
      md:flex'>
        <div className='curtain2 h-full pl-padding1 p-padding4 w-[120px] absolute justify-start items-center'>
          <img className='tranform rotate-[180deg]' src="/left.svg" alt="" />
        </div>
      </div>
      <div onScroll={(e)=>{getScroll(e)}} className='filterbar flex justify-start h-full py-padding1 px-padding6 w-auto pr-[100px] items-center flex gap-gap2 overflow-x-scroll'>
        {
          categories.map(category =><Button key={category.id} setSelected = {setSelected} selected={selected} text={category.title} id={category.id}/>)
        }
      </div>
    </div>
  )
}

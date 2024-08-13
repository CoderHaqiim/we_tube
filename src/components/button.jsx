import React, { useState } from 'react'

export default function Button({text,selected,setSelected,id}) {

    const checkId = () =>{
      setSelected(id)
    }
    

  return (
    <button onClick = {checkId} className={ `${selected === id? 'bg-white text-black scale-[1.05]':'bg-glass text-textcolor scale-[1]'}  transform text-sm2 rounded-rounded1 h-[30px] line-height-[1] text-center text-nowrap w-auto font-bold flex justify-center p-[10px] items-center`}>
      {text}
    </button>
  )
}
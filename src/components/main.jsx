import React from 'react'
import Card from './card'
import Shortcard from './short_card'
import Seemore from './seemore'
import { cards,shorts } from '../db'

export default function Main() {
  return (
    <main className='w-full pt-[30px] h-auto flex items-center justify-center'>
      <div className='container lg:max-w-[1200px]'>
        <div className='w-full h-auto'>
          <div className='w-full h-auto flex flex-wrap justify-center pt-padding3  min-h-[700px]'>
            {cards.map(item => <Card key={item.id} img={item.img}  title={item.title} author={item.author}/>)}
          </div>
        </div>

        <div className='p-padding4 w-full'>
          <div className='text-white pt-[0px] px-padding4 flex items-center gap-gap2'>
            <div className='w-[25px] h-[25px]'>
              <img src="/shorts.svg" alt="" />
            </div>
            <div className='font-bold text-[1.2rem]'>Shorts</div>
          </div>

          <div className='shorts justify-start w-full mb-[50px] flex h-auto items-center overflow-x-scroll'>
            {shorts.map(short => <Shortcard key={short.id} img={short.img} author={short.author}/>)}
          </div>

          <div className='w-full flex h-[5px] justify-center mt-[20px] align-center relative border-b-[1px] border-b-[solid] border-b-glass2'>
              <Seemore/> 
          </div>

        </div>
      </div>
    </main>
  )
}

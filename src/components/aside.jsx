import React from 'react'
import Navitems from './navitems'
import { navs } from '../db'

export default function Aside() {
  return (
    <aside className='hidden h-[100vh] fixed top-[56px] left-[0px] align-center flex-col w-[72px] px-padding1 p-padding2
    md:flex'>
      <ul>
        {
          navs.map(items => <Navitems key={items.id} image={items.img} title={items.title}/>)
        }
      </ul>
    </aside>
  )
}

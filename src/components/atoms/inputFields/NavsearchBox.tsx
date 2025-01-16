"use client"
import { SearchNormal } from 'iconsax-react';
function Nav_searchBox({open}:{open:()=>void}) {
  

  return (

    <button onClick={open}
    className='box-center gap-x-1.5 bg-transparent child:text-white tr-300'
    >
        <span   className="text-bodyB2Regular  xl:text-xl lg:text-lg">جستجو</span>
        <SearchNormal variant='Outline' className='size-6 fill-white'/>
    </button>

  )
}

export default Nav_searchBox

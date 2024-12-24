"use client"
import SearchIcon from '../../../../public/icons/svgs/SearchIcon';
function Nav_searchBox({open}:{open:()=>void}) {
  

  return (

    <button onClick={open}
    className='box-center gap-x-1.5 bg-transparent child:text-white tr-300'
    >
        <span className="text-bodyB2Regular ">جستجو</span>
        <SearchIcon/>
    </button>

  )
}

export default Nav_searchBox

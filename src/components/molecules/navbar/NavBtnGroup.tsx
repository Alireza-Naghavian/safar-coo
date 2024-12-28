import MainBtn from '@/components/atoms/buttons&links/MainBtn'
import React from 'react'
import ProfileIcon from '../../../../public/icons/svgs/ProfileIcon'
import AddIcon from '../../../../public/icons/svgs/AddIcon'

function NavBtnGroup() {
  return (
    <>
         <MainBtn size="xl" state="hover" className="w-[41px]   sm:w-auto  !p-0 sm:!px-3 sm:!py-4 text-nowrap bg-secondary-300 rounded-full  sm:rounded-4" variant="fill" >
         <span className='hidden sm:block'>ثبت نام</span>
       <span className='sm:hidden'><ProfileIcon/></span>
         </MainBtn>
        <MainBtn size="xl" state="hover" className=" w-[41px] sm:w-auto   !p-0 sm:!px-3 sm:!py-4 text-nowrap bg-secondary-400 hover:bg-secondary-500 rounded-full sm:rounded-4" variant="fill" >
        <span className='hidden sm:block'>نصب اپلیکیشن</span>
           <span className='sm:hidden'><AddIcon/></span>
        </MainBtn>
    </>
  )
}

export default NavBtnGroup
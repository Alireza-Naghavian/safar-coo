import MainBtn from '@/components/atoms/buttons&links/MainBtn'
import React from 'react'
import ProfileIcon from '../../../../public/icons/svgs/ProfileIcon'
import AddIcon from '../../../../public/icons/svgs/AddIcon'

function NavBtnGroup() {
  return (
    <>
         <MainBtn size="xl" state="hover" className="      text-nowrap bg-secondary-300   rounded-4" variant="fill" >
       <span className='sm:hidden'><ProfileIcon/></span>
         <span className=''>ثبت نام</span>
         </MainBtn>
        <MainBtn size="xl" state="hover" className=" w-[41px] sm:w-auto    !hidden  sm:!block  text-nowrap bg-secondary-400 hover:bg-secondary-500  sm:rounded-4" variant="fill" >
        <span className='hidden sm:block'>نصب اپلیکیشن</span>
       
        </MainBtn>
    </>
  )
}

export default NavBtnGroup
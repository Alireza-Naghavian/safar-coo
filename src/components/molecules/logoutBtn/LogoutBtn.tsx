import MainBtn from '@/components/atoms/buttons&links/MainBtn'
import { Logout, LogoutCurve } from 'iconsax-react'
import React from 'react'

function LogoutBtn() {
  return (
    <button className='flex gap-x-2 rounded-4 tr-300 items-center py-2 px-3 w-full hover:!bg-accent-200 ' >
        <LogoutCurve  className='stroke-natural-black group-hover:stroke-accent-500 size-8' />
        <span className='text-bodyB2Regular group text-natural-gray2 group-hover:text-natural-black  '>خروج</span>
    </button>
  )
}

export default LogoutBtn
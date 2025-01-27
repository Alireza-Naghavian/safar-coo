"use client"
import React from 'react'
import MainBtn from './MainBtn'
import { ArrowSquareLeft, ArrowSquareRight } from 'iconsax-react'
export type Nav_BtnsType ={
  nextId:string
    prevId:string
  }
function SwiperNavigationBtns({nextId,prevId}:Nav_BtnsType) {
  return (
    <div className=' w-full flex absolute sm:-top-24 -top-28 z-50 left-0 
   items-center mx-auto child:py-6'>
    <div className={`sm:mt-0  mt-[1.75rem] flex justify-between items-center w-full gap-4`}>
        <MainBtn id={nextId} variant='fill' size='xxl' state='normal' className='w-fit ml-auto'>
        <ArrowSquareRight className='size-11 stroke-natural-gray1 hover:stroke-accent-400 '/>
        </MainBtn> 
       <MainBtn id={prevId} variant='fill' size='xxl' state='normal' className='w-fit mr-auto'>
        <ArrowSquareLeft className='size-11 stroke-natural-gray1 hover:stroke-accent-400 '/>
        </MainBtn> 
    </div>
   </div>
  )
}

export default SwiperNavigationBtns
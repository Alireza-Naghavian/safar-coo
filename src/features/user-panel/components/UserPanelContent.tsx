"use client"
import { ChildrenProps } from '@/types/global.t'
import React from 'react'

function UserPanelContent({children}:ChildrenProps) {
  return (
    <div className='w-full lg:max-w-[970px] relative h-full bg-accent-200 rounded-12 '>{children}</div> 
  )
}

export default UserPanelContent
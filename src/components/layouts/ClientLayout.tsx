import { ChildrenProps } from '@/types/global.t'
import React from 'react'
import NavBarLayout from '../molecules/navbar/NavBarLayout'
import Footer from '../organisms/footer/Footer'

function ClientLayout({children}:ChildrenProps) {
  return (
    <>
    <NavBarLayout/>       
    {children}
    <Footer/>
    </>
  )
}

export default ClientLayout
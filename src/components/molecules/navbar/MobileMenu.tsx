import { Disclosure_T } from '@/hooks/useDisclosure'
import React from 'react'

function MobileMenu({close:closeMenu,isOpen:isMenuOpen}:Partial<Disclosure_T>) {
  return (
    <div className={`
                    lg:hidden bg-white tr-300 transform md:w-[calc(100vw-400px)] 
                    w-screen h-screen overflow-hidden absolute inset-0 z-50 
                     ${isMenuOpen ? "translate-x-0" : "translate-x-[240rem]"}`}>


    </div>
  )
}

export default MobileMenu

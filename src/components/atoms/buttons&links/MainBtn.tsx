"use client"
import { Button_T } from '@/types/buttons.t'
import { linkStyles } from './NavLink'

function MainBtn({children,size,state,variant,className,target,...props}:Button_T) {
  return (
    <button className={linkStyles({className,size,variant,state})} {...props} >
        {children}
    </button>
  )
}

export default MainBtn
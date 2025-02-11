import { ClassName_T } from '@/types/global.t'
import React from 'react'

function ColorShade({className}:ClassName_T) {
  return (
    <div className={`hidden lg:block absolute    -translate-y-[74%] size-[356px]
        opacity-55 blur-[65px] -z-10 rounded-full ${className}`}></div>
  )
}

export default ColorShade
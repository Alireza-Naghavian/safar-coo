import { ClassName_T } from '@/types/global.t'
import React from 'react'
type Spinner_T=ClassName_T&{
    width:string
height:string
color?:string|null
}
function Spinner({height,width,className,color}:Spinner_T) {
  return (
    <svg
    className={`${width} ${height}   animate-spin  ${className} `}
    viewBox="0 0 100 100"
  >
    <circle
      fill="none"
      strokeWidth="5"
      className="stroke-natural-gray1 opacity-40 "
      cx="50"
      cy="50"
      r="40"
    />
    <circle
      fill="none"
      strokeWidth="5"
      className={color ?? "stroke-success-2"}
      strokeDasharray="310"
      strokeDashoffset="210"
      cx="50"
      cy="50"
      r="40"
    />
  </svg>
  )
}

export default Spinner
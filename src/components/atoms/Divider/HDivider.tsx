import Image from 'next/image'
import React from 'react'

function HDivider() {
  return (
    <div className='w-full h-[45px] relative'>
        <Image
        src={"/images/seperator.png"}
        alt='seperator.png'
        className='!relative'
        fill
        />
    </div>
  )
}

export default HDivider
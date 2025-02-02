import IranologyCard from '@/components/molecules/cards/IranologyCard'
import React from 'react'

function CityLogyList() {
  return (
    <ul className='w-full flex flex-col  md:gap-y-10 gap-y-6'>
      <IranologyCard
        role='ADMIN'
      cover='/images/sotoon.png'
      desc='پارک ملت رشت با درختان کهنسال خود، ۱۲ هکتار مساحت دارد. 
      این پارک که از مکان های تفریحی رشت برای کودکان محسوب می‌شود، دارای 
      امکانات رفاهی مناسبی نظیر زمین‌های ورزشی، نمازخانه و وسایل ورزش همگانی است. 
      پارک ملت یکی از باغ‌های قدیمی شهر رشت است که با نام سیاه باغ شناخته می‌شود.
       درختان این پارک اغلب درختان قدیمی‌ هستند. این باغ در سال ۱۳۷۸ پس از طراحی ...'
       href='/iranology/rasht/sjdjs'
       title='پارک ملت رشت'
       variant='inner-caption'
       badgeContent='طبیعی'
       score={4.5}
       
      />   
      <IranologyCard
      role='ADMIN'
      cover='/images/sotoon.png'
      desc='پارک ملت رشت با درختان کهنسال خود، ۱۲ هکتار مساحت دارد. 
      این پارک که از مکان های تفریحی رشت برای کودکان محسوب می‌شود، دارای 
      امکانات رفاهی مناسبی نظیر زمین‌های ورزشی، نمازخانه و وسایل ورزش همگانی است. 
      پارک ملت یکی از باغ‌های قدیمی شهر رشت است که با نام سیاه باغ شناخته می‌شود.
       درختان این پارک اغلب درختان قدیمی‌ هستند. این باغ در سال ۱۳۷۸ پس از طراحی ...'
       href='iranology/rasht/sjdjs'
       title='پارک ملت رشت'
       variant='inner-caption'
       badgeContent='طبیعی'
       score={4.5}

      />   
      <IranologyCard
       role='USER'
      cover='/images/sotoon.png'
      desc='پارک ملت رشت با درختان کهنسال خود، ۱۲ هکتار مساحت دارد. 
      این پارک که از مکان های تفریحی رشت برای کودکان محسوب می‌شود، دارای 
      امکانات رفاهی مناسبی نظیر زمین‌های ورزشی، نمازخانه و وسایل ورزش همگانی است. 
      پارک ملت یکی از باغ‌های قدیمی شهر رشت است که با نام سیاه باغ شناخته می‌شود.
       درختان این پارک اغلب درختان قدیمی‌ هستند. این باغ در سال ۱۳۷۸ پس از طراحی ...'
       href='iranology/rasht/sjdjs'
       title='پارک ملت رشت'
       variant='inner-caption'
       badgeContent='طبیعی'
       score={4.5}
        provider='سعید رحمانی'
      />   
 
    </ul>
  )
}

export default CityLogyList
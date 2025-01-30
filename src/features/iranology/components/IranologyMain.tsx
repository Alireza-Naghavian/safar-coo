import BreadCrumb from '@/components/atoms/Breadcrumb/BreadCrumb'
import ClientLayout from '@/components/layouts/ClientLayout'
import React from 'react'
import IranologyFilterSection from './IranologyFilterSection'
import PopularAttractions from './swipers/PopularAttractions'
import TransitionRoute from '@/components/organisms/TransitionRoute/TransitionRoute'
import PopRecreationalPlaces from './swipers/PopRecreationalPlaces'

function IranologyMain() {
  return (
    <ClientLayout>
        <TransitionRoute>
    <main className="max-w-[1920px] relative mx-auto overflow-x-hidden min-h-screen  ">
      <div className="md:px-[113px] px-5">
        <div className="mt-10 w-full">
          <BreadCrumb
            firstTitle={"صفحه اصلی"}
            firstTarget="/"
            nestedStep={1}
            nestedLinks={[{ target: "/iranology", title: "ایران شناسی" }]}
            seperator={">"}
          />
        </div>
        <p
          className="lg:max-w-[900]  w-full mt-10 sm:mt-[88px] relative text-bodyB4semi
       md:text-bodyB1semi lg:text-h4Semi text-natural-black text-right"
        >
          در بخش <span className="text-primary-500">ایران شناسی</span>، ما
          جاذبه های مختلف ایران رو به شما معرفی میکنیم،همچنین به غیر از جاذبه
          ها مکان های مختلفی که هر شهر و استان رو داره و شما بهش نیاز دارین
          بهتون معرفی میکنیم از مراکز خرید گرفته تا هتل و... و به اطلاعات
          جامعی از هر مکان دسترسی داری،با فیلتر پیشرفته ما میتونی سریع تر اون
          مکانی که میخوای رو پیدا کنی.
        </p>
        <IranologyFilterSection/>
        <PopularAttractions/>
        <PopRecreationalPlaces/>
      </div>
    </main>
    </TransitionRoute>
  </ClientLayout>
  )
}

export default IranologyMain
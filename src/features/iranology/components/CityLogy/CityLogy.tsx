import BreadCrumb from '@/components/atoms/Breadcrumb/BreadCrumb'
import ClientLayout from '@/components/layouts/ClientLayout'
import TransitionRoute from '@/components/organisms/TransitionRoute/TransitionRoute'
import React from 'react'
import IranologyIcon from '../../../../../public/icons/svgs/IranologyIcon'
import { CloudDrizzle } from 'iconsax-react'
import DesktopFilterCitySections from './DesktopFilterCitySections'

function CityLogy() {
  return (
 <ClientLayout>
    <TransitionRoute>
    <main className="max-w-[1920px] relative mx-auto overflow-x-hidden min-h-screen  ">
      <div className="md:px-[113px] px-5">
        <div className="mt-10 w-full">
          <BreadCrumb
            firstTitle={"صفحه اصلی"}
            firstTarget="/"
            nestedStep={3}
            nestedLinks={[{ target: "/iranology", title: "ایران شناسی" },{ target: "/iranology/rasht", title: "رشت" }]}
            seperator={">"}
          />
        </div>
        <div className="w-full relative flex justify-between items-center mt-10">
            {/* city title info */}
        <div className="flex items-end gap-x-3">
            <IranologyIcon/>
            <h1 className="xl:text-h1Semi lg:text-h2Semi sm:text-h4Semi text-bodyB2semi">جاذبه های طبیعی و گردشگری رشت</h1>
        </div>
        {/* current weather city */}
        <div className="box-center flex-col gap-y-6 child:text-center">
            <span className="text-natural-black lg:text-h4Semi sm:text-bodyB3semi text-bodyB4semi">
            آب و هوای الان رشت:
            </span>
            <div className='bg-accent-400 rounded-8 w-fit px-8 py-2 box-center gap-x-1'>
            <CloudDrizzle className='size-5 fill-white'/>
            <span>13 بارانی</span>
            </div>
        </div>
        </div>
        {/*main content */}
        <section className='relative w-full flex items-start gap-x-10 mt-20 md:mt-[100px]'>
            <DesktopFilterCitySections/>
        </section>
      </div>
    </main>
    </TransitionRoute>
 </ClientLayout>
  )
}

export default CityLogy
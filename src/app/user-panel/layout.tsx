import BreadCrumb from '@/components/atoms/Breadcrumb/BreadCrumb'
import ClientLayout from '@/components/layouts/ClientLayout'
import UserPanelContent from '@/features/user-panel/components/UserPanelContent'
import UserPanelMenu from '@/features/user-panel/components/UserPanelMenu'
import { ChildrenProps } from '@/types/global.t'
import React from 'react'

function UserPanelLayout({children}:ChildrenProps) {
  return (
    <ClientLayout>
    <main className="max-w-[1920px] relative mx-auto overflow-x-hidden min-h-screen  ">
      <section className="md:px-[113px] px-5 ">
        {/* content wrapper*/}
        <div className="  w-full mt-10" >
        <BreadCrumb
            firstTitle={"صفحه اصلی"}
            firstTarget="/"
            nestedStep={1}
            nestedLinks={[{ target: "/user-panel", title: "پروفایل کاربری" }]}
            seperator={">"}
          />
        </div>
        {/* main content */}
        <div className="w-full relative flex items-start justify-center gap-x-3 mt-[72px]">
          {/* menu wrapper */}
          <section className="relative w-[25%]">
            <UserPanelMenu/>
          </section>
          <section className="relative w-[75%]">
            <UserPanelContent>
                {children}
            </UserPanelContent>
          </section>
        </div>
      </section>
    </main>
  </ClientLayout>
  )
}

export default UserPanelLayout
import BreadCrumb from "@/components/atoms/Breadcrumb/BreadCrumb";
import ClientLayout from "@/components/layouts/ClientLayout";
import React from "react";
import UserPanelMenu from "./UserPanelMenu";
import UserPanelContent from "./UserPanelContent";

function UserPanelLayout() {
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
          <div className="w-full relative flex items-center gap-x-3 mt-[72px]">
            {/* menu wrapper */}
            <div className="relative w-[25%]">
              <UserPanelMenu/>
            </div>
            <div className="relative w-[75%]">
              <UserPanelContent/>
            </div>
          </div>
        </section>
      </main>
    </ClientLayout>
  );
}

export default UserPanelLayout;

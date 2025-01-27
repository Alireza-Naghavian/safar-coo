"use client";
import BreadCrumb from "@/components/atoms/Breadcrumb/BreadCrumb";
import ClientLayout from "@/components/layouts/ClientLayout";
import UserPanelContent from "@/features/user-panel/components/UserPanelContent";
import UserPanelMenu from "@/features/user-panel/components/UserPanelMenu";
import { ChildrenProps } from "@/types/global.t";
import React from "react";
import { motion } from "motion/react";
import useDisclosure from "@/hooks/useDisclosure";

function UserPanelLayout({ children }: ChildrenProps) {
  const { isOpen: isMenuOpen, open, close } = useDisclosure(true as boolean);
  return (
    <ClientLayout>
      <main className="max-w-[1920px] relative mx-auto overflow-x-hidden min-h-screen  ">
        <section className="md:px-[113px] px-5 "> 
          {/* content wrapper*/}
          <div className="  w-full mt-10">
            <BreadCrumb
              firstTitle={"صفحه اصلی"}
              firstTarget="/"
              nestedStep={1}
              nestedLinks={[{ target: "/user-panel", title: "پروفایل کاربری" }]}
              seperator={">"}
            />
          </div>
          {/* main content */}
          <div className="w-full relative flex lg:flex-row flex-col lg:gap-y-0 gap-y-8 items-start justify-center gap-x-3 mt-[72px]">
            {/* menu wrapper */}
            <motion.section
              transition={{ duration: 0.2 ,bounce:0,stiffness:0}}

              animate={isMenuOpen ? { width: "var(--motion-menu-width-open)" } : { width: "var(--motion-menu-width-close)" }}
              className="relative  tr-200"
            >
              <UserPanelMenu
                isMenuOpen={isMenuOpen}
                openMenu={open}
                closeMenu={close}
              />
            </motion.section>
            <motion.section
              transition={{ duration: 0.2,bounce:0,stiffness:0 }}
              animate={isMenuOpen ? { width: "var(--motion-content-width-open)" } : { width: "var(--motion-content-width-close)" }}
              className="relative  tr-200"
            >
              <UserPanelContent>{children}</UserPanelContent>
            </motion.section>
          </div>
        </section>
      </main>
    </ClientLayout>
  );
}

export default UserPanelLayout;

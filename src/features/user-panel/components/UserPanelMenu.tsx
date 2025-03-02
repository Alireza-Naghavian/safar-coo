"use client";
import React from "react";
import Close_square from "../../../../public/icons/svgs/Close_square";
import Image from "next/image";
import NavItem from "@/components/atoms/NavItem/NavItem";
import { userMenuItem } from "@/utils/constants";
import LogoutBtn from "@/components/molecules/logoutBtn/LogoutBtn";
import { HambergerMenu } from "iconsax-react";
import { AnimatePresence, motion } from "motion/react";
import { MenuProps } from "../user-panel.t";
import Providers from "@/providers/QueryClientProvider";
const menuMotionVars = {
  open: { x: 100, display: "none"},
  close: { x: 0, display: "block" },
};
function UserPanelMenu({ isMenuOpen, openMenu, closeMenu }: MenuProps) {
  return (
    <div className={`relative w-full rounded-8 bg-gray-100/65 flex flex-col  py-4 px-2
      shadow-lg overflow-hidden  `}>
      <div className={`hidden lg:flex  relative  justify-center h-9  ${isMenuOpen? "w-fit":"w-full"}`}>
        <AnimatePresence  initial={false} mode="sync">
          <motion.button
            key={"closeUserPanelMenu"}
            className="cursor-pointer  w-fit z-50 "
            transition={{duration:.2}}
            variants={menuMotionVars}
            animate={isMenuOpen ? "close" : "open"}
            onClick={closeMenu}
          >
            <Close_square />
          </motion.button>
          <motion.button
           transition={{duration:.2}}
            key={"openUserPanelMenu"}
            className="cursor-pointer mx-auto   w-full  "
            variants={menuMotionVars}
            animate={isMenuOpen ? "open" : "close"}
            onClick={openMenu}
          >
            <HambergerMenu className=" size-8 stroke-natural-black mx-auto" />
          </motion.button>
        </AnimatePresence>
      </div>

      {/* avatar */}
      <div className={` flex-col w-full relative tr-200 delay-100 
         gap-y-2 items-center flex`}>
        <Image
          sizes="60"
          src={"/images/user_sample.png"}
          alt="user.png"
          width={60}
          height={60}
          className="rounded-full border border-natural-black mt-4"
        />
        <span className={`text-bodyB4Semi text-natural-black ${!isMenuOpen ? "hidden" : "flex"}`}>
          علیرضا نقویان
        </span>
      </div>
      {/* user menu content */}
      <ul  className="w-full relative flex   flex-col  gap-y-4 mt-6 ">
        {userMenuItem.map((menuItem) => {
          return (
            <React.Fragment key={menuItem._id}>
              <li >
                <NavItem
                  size="mobile"
                  {...menuItem}
                  title={isMenuOpen ? menuItem.title :null}
                  Icon={menuItem.Icon}
                  IconStyles="group-hover:stroke-accent-500 flex "
                  className="text-bodyB2Regular group text-natural-gray2 tr-200 text-nowrap
                   hover:text-natural-black  hover:!bg-accent-200   "
                />
              </li>
            </React.Fragment>
          );
        })}
        <li className="group">
          <Providers>
          <LogoutBtn isMenuOpen={isMenuOpen} />
          </Providers>
        </li>
      </ul>
    </div>
  );
}
export default UserPanelMenu;

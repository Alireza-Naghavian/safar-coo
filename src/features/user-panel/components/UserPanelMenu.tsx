"use client";
import NavItem from "@/components/atoms/NavItem/NavItem";
import Skeleton_sample from "@/components/atoms/skeltons/SkeltonSample";
import LogoutBtn from "@/components/molecules/logoutBtn/LogoutBtn";
import { useGetMe } from "@/features/auth/hooks/auth.hook";
import Providers from "@/providers/QueryClientProvider";
import { userMenuItem } from "@/utils/constants";
import { HambergerMenu } from "iconsax-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import React from "react";
import Close_square from "../../../../public/icons/svgs/Close_square";
import { MenuProps } from "../user-panel.t";
import { usePathname } from "next/navigation";
const menuMotionVars = {
  open: { x: 100, display: "none" },
  close: { x: 0, display: "block" },
};
function UserPanelMenu({ isMenuOpen, openMenu, closeMenu }: MenuProps) {
  const { userInfo, isUserLoading } = useGetMe();
  const path = usePathname();
  const activePath = path.split("/").at(2);
  const defaultPath = path.split("/").at(1);
  return (
    <div
      className={`relative w-full rounded-8 bg-gray-100/65 flex flex-col  py-4 px-2
      shadow-lg overflow-hidden  `}
    >
      <div
        className={`hidden lg:flex  relative  justify-center h-9  ${
          isMenuOpen ? "w-fit" : "w-full"
        }`}
      >
        <AnimatePresence initial={false} mode="sync">
          <motion.button
            key={"closeUserPanelMenu"}
            className="cursor-pointer  w-fit z-50 "
            transition={{ duration: 0.2 }}
            variants={menuMotionVars}
            animate={isMenuOpen ? "close" : "open"}
            onClick={closeMenu}
          >
            <Close_square />
          </motion.button>
          <motion.button
            transition={{ duration: 0.2 }}
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
      <div
        className={` flex-col w-full relative tr-200 delay-100 
         gap-y-2 items-center flex`}
      >
        <Image
          sizes="60"
          src={"/images/user_sample.png"}
          alt="user.png"
          width={60}
          height={60}
          className="rounded-full border border-natural-black mt-4"
        />
        {isUserLoading ? (
          <UserInfoSkelton />
        ) : (
          <span
            className={`text-bodyB4Semi text-natural-black ${
              !isMenuOpen ? "hidden" : "flex"
            }`}
          >
            {userInfo?.username}
          </span>
        )}
      </div>
      {/* user menu content */}
      <ul className={`w-full relative flex   flex-col  gap-y-4 mt-6 `}>
        {userMenuItem.map((menuItem) => {
           const defaultPathIsActive =  activePath ==undefined && defaultPath == menuItem._id
           const restPathIsActive =activePath !==undefined && menuItem._id === activePath

          return (
            <li key={menuItem._id}>
              <NavItem
                size="mobile"
                {...menuItem}
                title={isMenuOpen ? menuItem.title : null}
                Icon={menuItem.Icon}
                IconStyles={`group-hover:stroke-accent-500 flex  ${defaultPath ? "stroke-accent-500":restPathIsActive ? "stroke-accent-500" :""}`}
                className={`text-bodyB2Regular group
                     text-natural-gray2 tr-200 text-nowrap
                   hover:!text-natural-black  hover:!bg-accent-200
                   ${
                    defaultPathIsActive
                       ? "!bg-accent-200  !text-natural-black"
                       :restPathIsActive
                       ? "!bg-accent-200 !text-natural-black "
                       : ""
                   }
                   `}
              />
            </li>
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

const UserInfoSkelton = () => {
  return (
    <Skeleton_sample count={1}>
      <Skeleton_sample.Item
        backgroundColor="bg-accent-400"
        height="h-[20px]"
        className=" gap-1 py-2 px-3 text-sm flex items-center font-YekanSemi justify-center"
        animated="background"
        width="w-[100px]"
      ></Skeleton_sample.Item>
    </Skeleton_sample>
  );
};
export default UserPanelMenu;

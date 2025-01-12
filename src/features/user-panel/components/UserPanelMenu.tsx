"use client";
import React from "react";
import Close_square from "../../../../public/icons/svgs/Close_square";
import Image from "next/image";
import NavItem from "@/components/atoms/NavItem/NavItem";
import { userMenuItem } from "@/utils/constants";
import LogoutBtn from "@/components/molecules/logoutBtn/LogoutBtn";

function UserPanelMenu() {
  return (
    <div className="relative w-full rounded-8 bg-white flex flex-col py-4 px-2  shadow-lg">
      <button>
        <Close_square />
      </button>
      {/* avatar */}
      <div className="flex flex-col w-full relative  gap-y-2 items-center">
        <Image
          sizes="68"
          src={"/images/user_sample.png"}
          alt="user.png"
          width={68}
          height={68}
          className="rounded-full border border-natural-black"
        />
        <span className="text-bodyB5Regular text-natural-black">
          علیرضا نقویان
        </span>
      </div>
      {/* user menu content */}
      <ul className="w-full relative flex  flex-col gap-y-4 mt-12 ">
        {userMenuItem.map((menuItem) => {
          return (
          <React.Fragment key={menuItem._id} >
              <li >
              <NavItem
                size="mobile"
                {...menuItem}
                Icon={menuItem.Icon}
                IconStyles="group-hover:stroke-accent-500"
                className="text-bodyB2Regular group text-natural-gray2 hover:text-natural-black  hover:!bg-accent-200"
              />
            </li>
           
          </React.Fragment>
          );
        })}
         <li className="group"><LogoutBtn/></li>
      </ul>
    </div>
  );
}

export default UserPanelMenu;

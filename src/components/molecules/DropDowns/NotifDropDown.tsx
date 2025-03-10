"use client";
import { ChildrenProps, ClassName_T } from "@/types/global.t";
import { DirectNormal, SmsNotification } from "iconsax-react";
import React from "react";
type DropDownProps_T = ClassName_T &
  ChildrenProps & {
    trigger: (id: string) => void;
    id: string;
    isOpen: boolean;
  };
function NotifDropDown({ trigger, children, ...rest }: DropDownProps_T) {
  return (
    <div
      id={rest.id}
      onClick={() => trigger(rest.id)}
      className={`relative w-full py-6 px-3 flex  rounded-8
        items-start justify-between bg-accent-400  h-full  tr-300 cursor-pointer
         ${
           rest.isOpen
             ? "sm:max-h-[263px] max-h-[360px] overflow-y-auto sm:overflow-y-hidden"
             : "max-h-[68px] child:line-clamp-1 overflow-y-hidden "
         } 
         ${rest.className}`}
    >
      {/* body */}
      <div
        className="relative w-full max-w-[220px] sm:max-w-[680px] bg-transparent
       text-white text-bodyB3Regular "
      >
        {children}
      </div>
      {/* seeen & unseen */}
      <div className="flex items-center ">
        <DirectNormal
          variant="Bold"
          className={`size-6 stroke-white ${rest.isOpen ? "block" : "hidden"}`}
        />
        <SmsNotification
          variant="Bold"
          className={`size-6 stroke-white ${rest.isOpen ? "hidden" : "block"}`}
        />
      </div>
    </div>
  );
}

export default NotifDropDown;

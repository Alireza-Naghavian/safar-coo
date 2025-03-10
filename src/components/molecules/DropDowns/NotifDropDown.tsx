"use client";
import { useMarkAsRead } from "@/features/user-panel/hooks/user.hook";
import { ChildrenProps, ClassName_T, ResponseData_T } from "@/types/global.t";
import { customToast } from "@/utils/CutomToast";
import { DirectNormal, Dislike, SmsNotification } from "iconsax-react";
import React from "react";
type DropDownProps_T = ClassName_T &
  ChildrenProps & {
    trigger: (id: string) => void;
    id: string;
    isOpen: boolean;
    status: "READ" | "UNREAD";
  };
function NotifDropDown({ trigger, children, ...rest }: DropDownProps_T) {
  const {  updateNotifStatus } = useMarkAsRead();
  const markHadnler = async () => {
    try {
      trigger(rest.id);
    if(rest.status == "UNREAD" )  {
      await updateNotifStatus({notifId:rest.id})
    }
    } catch (error: unknown) {
      customToast({
        title: "خطا در بروزرسانی اعلان",
        desc: error as ResponseData_T<string>,
        icon: Dislike,
        iconColor: "#ef4444",
        className: "text-red-500",
        type: "ERROR",
      });
    }
  };
  return (
    <div className="size-full relative">
      <div
        id={rest.id}
        onClick={markHadnler}
        className={` overflow-x-auto w-full py-6 px-3 flex  rounded-8
        items-start justify-between bg-accent-400  h-full  tr-300 cursor-pointer
         ${
           rest.isOpen
             ? "sm:max-h-[263px] max-h-[360px] overflow-y-auto sm:overflow-y-hidden"
             : "max-h-[68px] child:line-clamp-1 overflow-y-hidden "
         } 
         ${rest.className}`}
      >
        {rest.status === "UNREAD" && (
          <span className="absolute -left-2 -top-2  flex size-4 z-[70]">
            <span className="absolute left-0 inline-flex h-full w-full 
            animate-ping rounded-full bg-secondary-400 opacity-75">
            </span>
            <span className="relative inline-flex size-4 rounded-full bg-secondary-500"></span>
          </span>
        )}
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
            className={`size-6 stroke-white ${
              rest.isOpen ? "block" : "hidden"
            }`}
          />
          <SmsNotification
            variant="Bold"
            className={`size-6 stroke-white ${
              rest.isOpen ? "hidden" : "block"
            }`}
          />
        </div>
      </div>
    </div>
  );
}

export default NotifDropDown;

"use client";
import React, { useState } from "react";
import HeaderContentPanelLayout from "../HeaderContentPanelLayout";
import CustomSwitch from "@/components/atoms/Switch/CustomSwitch";
import NotifDropDown from "@/components/molecules/DropDowns/NotifDropDown";
import { fakeNotifData } from "@/utils/constants";

function MyNotifs() {
  const [isDropDownOpen, setIsDropDownOpen] = useState<string | null>(null);
  const toggleDropDown = (id: string) => {
    setIsDropDownOpen(isDropDownOpen === id ? null : id);
  };
  return (
    <div className="user-panel-container  relative">
      <HeaderContentPanelLayout
        title="اعلان های من "
        desc="اعلان های شما تا ۳۰ روز نگه داری و بعد از آن خودکار 
        حدف خواهد شد."
      >
        <div className="h-full w-full my-auto flex items-center gap-x-6 md:flex-nowrap flex-wrap md:gap-y-0 gap-y-4">
          <CustomSwitch
            className="text-natural-black sm:!text-bodyB3semi !text-bodyB4semi"
            name="seenNotif"
            label="فقط خوانده نشده ها"
            
          />
          <CustomSwitch
            className="text-natural-black sm:!text-bodyB3semi !text-bodyB4semi"
            name="unSeenNotif"
            label="فقط خوانده شده ها"
            
          />
        </div>
      </HeaderContentPanelLayout>
      <div className="flex flex-col  sm:px-11 px-4 py-8   space-y-8 ">
        {fakeNotifData.map((notif) => {
          return (
            <NotifDropDown
              key={notif.id}
              id={notif.id}
              isOpen={isDropDownOpen === notif.id }
              trigger={toggleDropDown}
            >
              <>{notif.content}</>
            </NotifDropDown>
          );
        })}
      </div>
    </div>
  );
}

export default MyNotifs;

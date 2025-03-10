"use client";
import CustomSwitch from "@/components/atoms/Switch/CustomSwitch";
import EmptyResult from "@/components/layouts/EmptyResult";
import NotifDropDown from "@/components/molecules/DropDowns/NotifDropDown";
import { useState } from "react";
import { useGetNotifications } from "../../hooks/user.hook";
import HeaderContentPanelLayout from "../HeaderContentPanelLayout";
import NotifSkeltons from "./NotifSkeltons";

function MyNotifs() {
  const [isDropDownOpen, setIsDropDownOpen] = useState<string | null>(null);
  const { isNotifLoading, notifications } = useGetNotifications();
  console.log(isNotifLoading);
  const toggleDropDown = (id: string) => {
    setIsDropDownOpen(isDropDownOpen === id ? null : id);
  };
  return (
    <>
      {isNotifLoading ? (
        <div className="user-panel-container  relative">
          <HeaderContentPanelLayout
            title="اعلان های من "
            desc="اعلان های شما تا ۳۰ روز نگه داری و بعد از آن خودکار 
     حدف خواهد شد."
          ></HeaderContentPanelLayout>
          <NotifSkeltons />
        </div>
      ) : (
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
            {notifications?.length > 0 ? (
              notifications?.map((notif) => {
                return (
                  <NotifDropDown
                    key={notif._id}
                    id={notif._id}
                    isOpen={isDropDownOpen === notif._id}
                    trigger={toggleDropDown}
                  >
                    <div className="flex flex-col gap-y-3 justify-start items-start">
                      <span>{notif.title}</span>
                      <p>{notif.body}</p>
                    </div>
                  </NotifDropDown>
                );
              })
            ) : (
              <EmptyResult
                pictureStyles="md:w-[50%] sm:w-[30%] w-[60%]"
                picture="/images/notFound.png"
                title={"هیج اعلانی یافت نشد"}
                desc="ممکن است تاریخ انقضای اعلان ها گدشته باشد یا هنوز اعلانی ثبت نشده باشد"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default MyNotifs;

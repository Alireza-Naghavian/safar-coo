"use client";
import CustomSwitch from "@/components/atoms/Switch/CustomSwitch";
import EmptyResult from "@/components/layouts/EmptyResult";
import NotifDropDown from "@/components/molecules/DropDowns/NotifDropDown";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import {
  useGetNotifByQueries,
  useGetNotifications,
} from "../../hooks/user.hook";
import HeaderContentPanelLayout from "../HeaderContentPanelLayout";
import NotifSkeltons from "./NotifSkeltons";

function MyNotifs() {
  const [isDropDownOpen, setIsDropDownOpen] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  const urlSearchParams = new URLSearchParams(searchParams);
  const [isRead, setIsRead] = useState(
    urlSearchParams.get("status") === "READ" ? true : false
  );
  const [isUnRead, setIsUnRead] = useState(
    urlSearchParams.get("status") === "UNREAD" ? true : false
  );

  const { isNotifLoading, notifications } = useGetNotifications();
  const { isNotifsLoading, notifs } = useGetNotifByQueries();

  const applyQeuries = (option: string, value: boolean) => {
    urlSearchParams.set("status", value ? option : "");
    router.replace(`/user-panel/notifications?${urlSearchParams.toString()}`, {
      scroll: false,
    });
  };
  const handleReadNotifs = () => {
    const newReadOption = !isRead;
    setIsRead(newReadOption);
    setIsUnRead(isUnRead && !newReadOption);
    applyQeuries("READ", newReadOption);
  };
  const handleUnReadNotifs = () => {
    const newReadOption = !isUnRead;
    setIsUnRead(newReadOption);
    setIsRead(isRead && !newReadOption);
    applyQeuries("UNREAD", newReadOption);
  };

  const toggleDropDown = (id: string) => {
    setIsDropDownOpen(isDropDownOpen === id ? null : id);
  };
  return (
    <>
      {isNotifLoading && isNotifsLoading ? (
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
            <div
              className="h-full w-full my-auto flex items-center gap-x-6
             md:flex-nowrap flex-wrap md:gap-y-0 gap-y-4"
            >
              <CustomSwitch
                className="text-natural-black sm:!text-bodyB3semi !text-bodyB4semi"
                name="seenNotif"
                label="فقط خوانده شده ها"
                isSelected={isRead}
                setIsSelected={handleReadNotifs}
              />
              <CustomSwitch
                className="text-natural-black sm:!text-bodyB3semi !text-bodyB4semi"
                name="unSeenNotif"
                label="فقط خوانده نشده ها"
                isSelected={isUnRead}
                setIsSelected={handleUnReadNotifs}
              />
            </div>
          </HeaderContentPanelLayout>
          <div className="flex w-full overflow-x-hidden flex-col  sm:px-11 px-4 py-8    space-y-8 ">
            {(notifications || notifs)?.length > 0 ? (
              (searchParams.size === 0 ? notifications : notifs)?.map(
                (notif, index) => {
                  return (
                    <NotifDropDown
                      key={notif._id || index}
                      id={notif._id}
                      isOpen={isDropDownOpen === notif._id}
                      trigger={toggleDropDown}
                      status={notif.status as "READ" | "UNREAD"}
                    >
                      <div className="flex flex-col gap-y-3 justify-start items-start">
                        <span>{notif.title}</span>
                        <p>{notif.body}</p>
                      </div>
                    </NotifDropDown>
                  );
                }
              )
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

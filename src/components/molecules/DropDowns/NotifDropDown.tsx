"use client";
import { useMarkAsRead } from "@/features/user-panel/hooks/user.hook";
import { ChildrenProps, ClassName_T, ResponseData_T } from "@/types/global.t";
import { customErorrToast } from "@/utils/CutomToast";
import { DirectNormal, SmsNotification, Trash } from "iconsax-react";
import { motion } from "motion/react";
import { useRef, useState } from "react";
type DropDownProps_T = ClassName_T &
  ChildrenProps & {
    trigger: (id: string) => void;
    id: string;
    isOpen: boolean;
    status: "READ" | "UNREAD";
  };
function NotifDropDown({ trigger, children, ...rest }: DropDownProps_T) {
  const { updateNotifStatus } = useMarkAsRead();
  const [isDragging, setIsDragging] = useState(false);
  const [isShowDelBtn, setIsShowDelBtn] = useState(false);
  const dragThreshold = 30;
  const dragStartX = useRef<number | null>(null);
  const markHandler = async () => {
    if (isDragging) return;
    try {
      trigger(rest.id);
      if (rest.status == "UNREAD") {
        await updateNotifStatus({ notifId: rest.id });
      }
    } catch (error: unknown) {
      customErorrToast({
        title: "خطا در بروزرسانی اعلان",
        desc: error as ResponseData_T<string>,
      });
    }
  };
  return (
    <div className=" flex relative items-center w-full  ">
      <button
        className="absolute right-0 top-0 bottom-0 w-[70px]
        bg-error-2 z-0 flex justify-center items-center rounded-r-8"
      >
        <Trash className=" size-10 " variant="Linear" color="#ffffff" />
      </button>
      <motion.div
        drag={"x"}
        dragDirectionLock
        dragConstraints={{ left: -70, right: 0 }}
        dragElastic={0.001}
        onDragStart={(e: PointerEvent) => {
          dragStartX.current = e.clientX;
          if (e.movementX < 0) {
            setIsShowDelBtn(true);
            setIsDragging(true);
          } else {
            setIsShowDelBtn(false);
          }
        }}
        onDragEnd={(event, info) => {
          const distance = info.offset.x;
          // drag? / click ?
          const clickEvent = Math.abs(distance) < dragThreshold;
          if (clickEvent) {
            setIsDragging(false);
            markHandler();
          } else {
            setIsDragging(true);
          }
          setTimeout(()=>setIsDragging(is=>!is),500)
        }}
        className=" relative w-full "
      >
        <div
          id={rest.id}
          onClick={markHandler}
          className={` overflow-x-auto w-full  py-6 px-3 flex  
        items-start justify-between bg-accent-400  h-full  tr-300 cursor-pointer
        ${isDragging ? "select-none " : ""}
        ${isShowDelBtn ? "rounded-l-8 rounded-r-none" : " rounded-8"}
         ${
           rest.isOpen
             ? "sm:max-h-[263px] max-h-[360px] overflow-y-auto sm:overflow-y-hidden"
             : "max-h-[68px] child:line-clamp-1 overflow-y-hidden "
         } 
         ${rest.className}`}
        >
          {rest.status === "UNREAD" && (
            <span className="absolute -left-2 -top-2  flex size-4 z-[70]">
              <span
                className="absolute left-0 inline-flex h-full w-full 
                  animate-ping rounded-full bg-secondary-400 opacity-75"
              ></span>
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
      </motion.div>
    </div>
  );
}

export default NotifDropDown;

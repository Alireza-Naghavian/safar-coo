import { ResponseData_T } from "@/types/global.t";
import { addToast } from "@heroui/toast";
import { AxiosError } from "axios";
import { Dislike, Icon } from "iconsax-react";
import React from "react";
type Toast_T<U> = {
  desc: ResponseData_T<U>|AxiosError<{ message: string }>;
  title: string;
  icon: Icon;
  className?:string,
  iconColor: string;
  type:"ERROR"|"SUCCESS"
};
export const customToast = ({
  desc,
  title,
  icon,
  iconColor,
  type,
  className
}: Toast_T<string>) => {
    const description =
    type === "ERROR"
      ? (desc as AxiosError<{ message: string|null }>)?.response?.data?.message ?? "خطای نامشخص"
      : (desc as ResponseData_T<string>)?.message;
  return addToast({
    title: title,
    classNames:{
            icon: "size-10  order-2 ",
            closeButton: "opacity-100 order-3 mr-auto ",
            content: "order-1 flex justify-between flex-grow text-right",
            base: "bg-white flex   p-4 gap-4",
            title: `font-YekanSemi ${className}`,
            closeIcon:"opacity-100  bg-natural-gray1  text-white absolute left-0 top-1/2 -translate-y-1/2",
            description: "text-slate-800  font-YekanSemi",
      
    },
    description: description,
    icon: React.createElement(icon, { color: iconColor, variant: "Bold" }),
  });
};

export const customErorrToast = ({title,desc}:{title:string,desc: ResponseData_T<string>})=>{
  return  customToast({
            title,
            desc:desc as ResponseData_T<string> ,
            icon: Dislike,
            iconColor: "#ef4444",
            className: "text-red-500",
            type: "ERROR",
          });
}

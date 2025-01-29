import MainBtn from "@/components/atoms/buttons&links/MainBtn";
import { Calendar2, Clock, Share } from "iconsax-react";
import React from "react";
import { ArticleHeader_T } from "../../tourism-articles.t";
import Avatar from "@/components/atoms/Avatar/Avatar";

function ArticleHeader({ desc, provider, title ,date}: ArticleHeader_T) {
  return (
    <div className="relative w-full  flex flex-col">
      <div
        className="mt-[88px]  w-full relative flex flex-col gap-y-8
       child:text-natural-black pb-3 border-b border-natural-gray2">
        <h1 className="text-right md:text-D4Semi text-h3Semi">{title}</h1>
        <div className="flex items-end justify-between flex-wrap gap-y-4">
          <p className="w-full max-w-[590px] md:text-bodyB2Regular text-bodyB3Regular">
            {desc}
          </p>
          <div className="flex items-center ">
            {/* share btn */}
            <div className="w-fit pl-3 border-l-2 border-natural-gray1">
              <MainBtn
                size="md"
                state="normal"
                variant="outline"
                className="flex items-center rounded-8 gap-2.5 group tr-300
           hover:bg-accent-500 hover:!border-accent-500  "
              >
                <Share
                  variant="Bold"
                  className="size-6 fill-accent-700 group-hover:fill-white"
                />
                <span className="group-hover:text-white sm:text-btnTextXl text-btnTextM">اشتراک گذاری</span>
              </MainBtn>
            </div>
            {/* provider */}
            <Avatar
              avatarHeight={27}
              avatarWidth={27}
              provider={provider}
              wrapperStyles="pr-3 "
              className="sm:text-bodyB2Regular text-bodyB4Regular text-nowrap"
            />
            {/* provider */}
          </div>
        </div>
      </div>
      <div className="relative w-full pt-8 flex flex-col items-start gap-y-1">
        <div className="flex  gap-x-1">
          <span className="mt-0.5">
            <Calendar2 className="size-[18px] stroke-natural-gray2 " />
          </span>
          <span className="text-natural-gray3 sm:text-bodyB3Regular  ">
            {
              new Date(date).toLocaleString("fa-IR", {
                dateStyle: "medium",
              }) as string
            }
          </span>
        </div>
        <div className="flex  gap-x-1">
          <span className="mt-0.5">
            <Clock className="size-[18px] stroke-natural-gray2 " />
          </span>
          <span className="text-natural-gray3 sm:text-bodyB3Regular  ">
            {
              new Date(date).toLocaleString("fa-IR", {
                timeStyle: "short",
                hour12: true,
              }) as string
            }
          </span>
        </div>
      </div>
    </div>
  );
}

export default ArticleHeader;

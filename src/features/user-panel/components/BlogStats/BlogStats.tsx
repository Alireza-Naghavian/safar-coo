"use client";
import BtnGroup from "@/components/atoms/buttons&links/BtnGroup";
import SearchBox from "@/components/atoms/inputFields/SearchBox";
import InfoCard from "@/components/molecules/cards/InfoCard";
import { Eye, MessageText, Star1 } from "iconsax-react";
import Link from "next/link";
import { useState } from "react";
import HeaderContentPanelLayout from "../HeaderContentPanelLayout";
const blogFilterOptions = [
  { label: "جدیدترین", value: "latest" },
  { label: "قدیمی ترین", value: "oldest" },
];
function BlogStats() {
  const [activeBtn, activate] = useState<{ value: string }>({
    value: "latest",
  });
  return (
    <div className="user-panel-container ">
      <HeaderContentPanelLayout
        title="آمار بازدید مقاله های من"
        desc={"این آمار بر اساس بازدید دیگر کاربران آپدیت میشوند."}
      >
        <BtnGroup>
          {blogFilterOptions.map((option) => {
            return (
              <button
                key={option.value}
                onClick={() => activate({ value: option.value })}
                className={`
                    first:rounded-r-8 last:rounded-l-8 
                    ${
                      activeBtn.value === option.value
                        ? "bg-primary-500"
                        : "bg-white"
                    }
                    sm:px-8 px-2 sm:py-4 py-3 sm:text-nowrap
                    `}
              >
                {option.label}
              </button>
            );
          })}
        </BtnGroup>
      </HeaderContentPanelLayout>
      {/* stat cards */}
      <section className="w-full relative my-10  ">
        <div className="sm:px-11 px-4 py-4 flex flex-col gap-y-[56px]">
          <SearchBox
            size="desktop"
            placeholder="جستجو در مقالات"
            className="sm:!w-[411px]"
          />
        {/* stats cards */}
        <BlogStatsCards/>
        </div>
      </section>
    </div>
  );
}


const BlogStatsCards = ()=>{
    return(
        <div className="size-full relative flex flex-col gap-y-16">
        <InfoCard className="!bg-primary-700  !gap-x-8  ">
          <InfoCard.InfoCardItem
  className="!gap-y-11"
            title="عنوان"
            value="تجربه بازدید از کلیسای وانک اصفهان"
          />
          <InfoCard.InfoCardItem className="!gap-y-2" title="امتیاز مقاله">
            <span className="flex flex-col gap-y-2 items-center">
              <Star1 className="size-[30px] fill-danger-1" />
              <span className="text-bodyB3Regular text-white">4.5</span>
            </span>
          </InfoCard.InfoCardItem>
          <InfoCard.InfoCardItem className="!gap-y-2" title="تعداد بازدید">
            <span className="flex flex-col gap-y-2 items-center">
              <Eye variant="Outline" className="size-[30px] fill-white" />
              <span className="text-bodyB3Regular text-white">
                ۳۰۰۰ بازدید
              </span>
            </span>
          </InfoCard.InfoCardItem>
          <InfoCard.InfoCardItem className="!gap-y-2" title="تعداد کامنت ها"  >
          <span className="flex flex-col gap-y-2 items-center">
              <MessageText variant="Bold" className="size-[30px] fill-secondary-500" />
              <span className="text-bodyB3Regular text-white">
              ۵۰ 
              </span>
            </span>
          </InfoCard.InfoCardItem>
          <InfoCard.InfoCardItem className="!gap-y-11"  title="مشاهده در وبسایت">
            <Link href="" className="">
              <Eye variant="Outline" className="fill-white size-6" />
            </Link>
          </InfoCard.InfoCardItem>
        </InfoCard>
      </div>
    )
}
export default BlogStats;

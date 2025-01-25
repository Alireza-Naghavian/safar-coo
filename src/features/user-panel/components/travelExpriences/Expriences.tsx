"use client";
import BtnGroup from "@/components/atoms/buttons&links/BtnGroup";
import DeleteBtn from "@/components/atoms/buttons&links/DeleteBtn";
import NavLink from "@/components/atoms/buttons&links/NavLink";
import SearchBox from "@/components/atoms/inputFields/SearchBox";
import InfoCard from "@/components/molecules/cards/InfoCard";
import { Eye } from "iconsax-react";
import Link from "next/link";
import { useState } from "react";
import HeaderContentPanelLayout from "../HeaderContentPanelLayout";

function Expriences() {
  const [activeBtn, setActiveBtn] = useState<{ value: string }>({
    value: "published",
  });
  return (
    <div className="user-panel-container">
      <HeaderContentPanelLayout
        className=""
        title="تجربیات منتشر شده من"
        desc={null}
      >
        <BtnGroup activate={setActiveBtn} activeBtn={activeBtn} />
      </HeaderContentPanelLayout>
      <div className="sm:px-11 px-4    py-4">
        <div className="w-full relative flex flex-wrap gap-y-5 items-center justify-between ">
          <SearchBox
            size="desktop"
            placeholder="جستجو در مقالات"
            className="sm:!w-[411px]"
          />
          <NavLink
            size="xl"
            className="bg-secondary-400 !px-4 !py-2 rounded-4"
            variant="fill"
            state="hover"
            target="/user-panel/travel-exprience/add"
          >
            نوشتن تجربه جدید
          </NavLink>
        </div>
        <div className=" md:mt-16 mt-12 max-h-[450px]     flex flex-col gap-y-14  ">
          <div className="size-full relative">
            <InfoCard className="!bg-primary-700  !gap-x-8  ">
              <InfoCard.InfoCardItem
                title="عنوان"
                value="تجربه بازدید از کلیسای وانک اصفهان"
              />
              <InfoCard.InfoCardItem
                title="دسته بندی مقاله"
                value="جاذبه های تاریخی"
              />
              <InfoCard.InfoCardItem title="تاریخ انتشار" value="۱۴۰۲/۰۲/۰۲" />
              <InfoCard.InfoCardItem title="ساعت انتشار" value="۱۱:۰۰ صبح" />
              <InfoCard.InfoCardItem title="مشاهده در وبسایت">
                <Link href="" className="">
                  <Eye variant="Outline" className="fill-white size-6" />
                </Link>
              </InfoCard.InfoCardItem>
              <DeleteBtn />
            </InfoCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expriences;

"use client";
import SwiperNavigationBtns from "@/components/atoms/buttons&links/SwiperNavigationBtns";
import BlogCard from "@/components/molecules/cards/BlogCard";
import TrExprienceCard from "@/components/molecules/cards/TrExprienceCard";
import SwiperWrapper from "@/components/molecules/swiper/SwiperWrapper";
import React from "react";
import { SwiperSlide } from "swiper/react";
const nextId = `swiper-button-next-favexp`;
const prevId = `swiper-button-prev-favexp`;
function FavUserExpSwiper() {
  return (
    <div className="w-full relative">
      <SwiperWrapper className="sm:gap-x-12" prevClass={prevId} nextClass={nextId}>
        <SwiperSlide>
     <TrExprienceCard
     title="تجربه بازدید از کاخ چهلستون-اصفهان"
     cover="/images/sotoon.png"
     href=""
     provider="علیرضا رضایی"
     badgeContent="جاذبه تاریخی"
     />
        </SwiperSlide>
        <SwiperSlide>
        <TrExprienceCard
     title="تجربه بازدید از کاخ چهلستون-اصفهان"
     cover="/images/sotoon.png"
     href=""
     provider="علیرضا رضایی"
     badgeContent="جاذبه تاریخی"
     />
        </SwiperSlide>
        <SwiperSlide>
        <TrExprienceCard
     title="تجربه بازدید از کاخ چهلستون-اصفهان"
     cover="/images/sotoon.png"
     href=""
     provider="علیرضا رضایی"
     badgeContent="جاذبه تاریخی"
     />
        </SwiperSlide>
        <SwiperSlide>
        <TrExprienceCard
     title="تجربه بازدید از کاخ چهلستون-اصفهان"
     cover="/images/sotoon.png"
     href=""
     provider="علیرضا رضایی"
     badgeContent="جاذبه تاریخی"
     />
        </SwiperSlide>
        <SwiperSlide>
        <TrExprienceCard
     title="تجربه بازدید از کاخ چهلستون-اصفهان"
     cover="/images/sotoon.png"
     href=""
     provider="علیرضا رضایی"
     badgeContent="جاذبه تاریخی"
     />
        </SwiperSlide>
        <SwiperSlide>
        <TrExprienceCard
     title="تجربه بازدید از کاخ چهلستون-اصفهان"
     cover="/images/sotoon.png"
     href=""
     provider="علیرضا رضایی"
     badgeContent="جاذبه تاریخی"
     />
        </SwiperSlide>
        <SwiperSlide>
        <TrExprienceCard
     title="تجربه بازدید از کاخ چهلستون-اصفهان"
     cover="/images/sotoon.png"
     href=""
     provider="علیرضا رضایی"
     badgeContent="جاذبه تاریخی"
     />
        </SwiperSlide>
        <SwiperSlide>
        <TrExprienceCard
     title="تجربه بازدید از کاخ چهلستون-اصفهان"
     cover="/images/sotoon.png"
     href=""
     provider="علیرضا رضایی"
     badgeContent="جاذبه تاریخی"
     />
        </SwiperSlide>
      </SwiperWrapper>

      <SwiperNavigationBtns prevId={prevId} nextId={nextId} />
    </div>
  );
}

export default FavUserExpSwiper;

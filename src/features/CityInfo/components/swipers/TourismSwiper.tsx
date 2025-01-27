"use client";
import SwiperNavigationBtns from "@/components/atoms/buttons&links/SwiperNavigationBtns";
import BlogCard from "@/components/molecules/cards/BlogCard";
import SwiperWrapper from "@/components/molecules/swiper/SwiperWrapper";
import React from "react";
import { SwiperSlide } from "swiper/react";
const nextId = `swiper-button-next-tourism`;
const prevId = `swiper-button-prev-tourism`;
function TourismSwiper() {
  return (
    <div className="w-full relative">
      <SwiperWrapper
        className="sm:gap-x-12"
        prevClass={prevId}
        nextClass={nextId}
      >
        <SwiperSlide>
          <BlogCard
            cover="/images/blogCardSampleCover.png"
            href=""
            score={"4.2"}
            title="غار نمکدان قشم"
            variant="inner-caption"
            badgeContent="جاذبه طبیعی"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCard
            cover="/images/blogCardSampleCover.png"
            href=""
            score={"4.2"}
            title="غار نمکدان قشم"
            variant="inner-caption"
            badgeContent="جاذبه طبیعی"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCard
            cover="/images/blogCardSampleCover.png"
            href=""
            score={"4.2"}
            title="غار نمکدان قشم"
            variant="inner-caption"
            badgeContent="جاذبه طبیعی"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCard
            cover="/images/blogCardSampleCover.png"
            href=""
            score={"4.2"}
            title="غار نمکدان قشم"
            variant="inner-caption"
            badgeContent="جاذبه طبیعی"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCard
            cover="/images/blogCardSampleCover.png"
            href=""
            score={"4.2"}
            title="غار نمکدان قشم"
            variant="inner-caption"
            badgeContent="جاذبه طبیعی"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCard
            cover="/images/blogCardSampleCover.png"
            href=""
            score={"4.2"}
            title="غار نمکدان قشم"
            variant="inner-caption"
            badgeContent="جاذبه طبیعی"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCard
            cover="/images/blogCardSampleCover.png"
            href=""
            score={"4.2"}
            title="غار نمکدان قشم"
            variant="inner-caption"
            badgeContent="جاذبه طبیعی"
          />
        </SwiperSlide>
      </SwiperWrapper>
      <SwiperNavigationBtns prevId={prevId} nextId={nextId} />
    </div>
  );
}

export default TourismSwiper;

"use client"
import React from 'react'
import SwiperNavigationBtns from "@/components/atoms/buttons&links/SwiperNavigationBtns";
import SectionTitle from "@/components/atoms/SectionTitle/SectionTitle";
import BlogCard from "@/components/molecules/cards/BlogCard";
import SwiperWrapper from "@/components/molecules/swiper/SwiperWrapper";
import { SwiperSlide } from "swiper/react";
const nextId = `swiper-button-next-popAttractions`;
const prevId = `swiper-button-prev-popAttractions`;
function PopularAttractions() {
  return (
    <section className="relative w-full mt-[104px] flex flex-col">
      <SectionTitle title="جاذبه های برتر" className="tracking-tighter " />
      <div className="w-full relative mt-[92px]">
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
    </section>
  );
}

export default PopularAttractions
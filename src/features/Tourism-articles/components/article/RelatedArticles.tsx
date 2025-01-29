"use client"
import SwiperNavigationBtns from '@/components/atoms/buttons&links/SwiperNavigationBtns'
import SectionTitle from '@/components/atoms/SectionTitle/SectionTitle'
import BlogCard from '@/components/molecules/cards/BlogCard'
import SwiperWrapper from '@/components/molecules/swiper/SwiperWrapper'
import React from 'react'
import { SwiperSlide } from 'swiper/react'
const nextId = `swiper-button-next-related-blog`;
const prevId = `swiper-button-prev-related-blog`;
function RelatedArticles() {
  return (
    <div className='w-full relative flex flex-col gap-y-8 mt-32 '>
        <SectionTitle
        title='مقالات مرتبط:'
        className='border-b border-b-primary-300 tracking-tighter w-fit' 
        hasLink
        href='/tourism-articles'     
        linkTitle='همه مقالات'   
        />
            <div className="w-full relative mt-20">
      <SwiperWrapper
        className="sm:gap-x-12 "
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
    </div>
  )
}

export default RelatedArticles
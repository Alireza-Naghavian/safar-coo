"use client"
import SwiperNavigationBtns from '@/components/atoms/buttons&links/SwiperNavigationBtns'
import SectionTitle from '@/components/atoms/SectionTitle/SectionTitle'
import TrExprienceCard from '@/components/molecules/cards/TrExprienceCard'
import SwiperWrapper from '@/components/molecules/swiper/SwiperWrapper'
import { SwiperSlide } from 'swiper/react'
const nextId = `swiper-button-next-rereationalPlaces`;
const prevId = `swiper-button-prev-rereationalPlaces`;
function PopRecreationalPlaces() {
  return (
    <section className="relative w-full mt-[104px] flex flex-col">
    <SectionTitle title="برترین ها از نگاه کاربران" className="tracking-[-0.09em] " />
    <div className="w-full relative mt-[92px]">
      <SwiperWrapper
        className="sm:gap-x-12"
        prevClass={prevId}
        nextClass={nextId}
      >
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
  </section>
  )
}

export default PopRecreationalPlaces
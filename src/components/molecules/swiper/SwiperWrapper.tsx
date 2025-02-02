"use client";
import { ChildrenProps, ClassName_T } from "@/types/global.t";
import { Suspense } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper } from "swiper/react";
import "./swiper-bundle.min.css";
type SwiperWrapper_T = Partial<ChildrenProps> &
  ClassName_T & {
    nextClass: string;
    prevClass: string;
  };
function SwiperWrapper({ nextClass, prevClass, ...rest }: SwiperWrapper_T) {
  return (
    <>
      <Suspense>
        <Swiper
          navigation={{
            nextEl: `#${nextClass}`,
            prevEl: `#${prevClass}`,
          }}
          autoplay={{ pauseOnMouseEnter: true, delay: 3000 }}
          modules={[Autoplay, Navigation]}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView:1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          <div className={`grid grid-rows-2 ${rest.className}`}>{rest.children}</div>
        </Swiper>
      </Suspense>
    </>
  );
}

export default SwiperWrapper;

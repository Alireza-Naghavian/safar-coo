import React from 'react'
import NotFoundComp from "@/components/layouts/NotFound";
import { ArrowForward } from 'iconsax-react';
function NotFound() {
  return (
    <NotFoundComp
    title={"مطلب مورد نظر یافت نشد"}
    desc=""
    picture="/images/404.png"
    pictureStyles="md:w-[405px] sm:w-[310px] w-[226px] md:h-[285px]  h-[189px]"
    utilLinks={[
      { href: "/", Icon: ArrowForward, title: "بازگشت به صفحه اصلی" },
    ]}
  />
  )
}

export default NotFound
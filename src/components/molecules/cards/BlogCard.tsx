import Badge from "@/components/atoms/Badge/Badge";
import { BlogCard_T } from "@/types/cards.t";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function BlogCard({ cover, href, title, badgeContent,variant }: BlogCard_T) {
  return (
    <div
      className=" px-3 py-4 relative rounded-8 xl:h-[265px] lg:h-[230px] h-[140px] 
                flex flex-col  justify-between group "
    >
      <Badge
        className="shadow-md z-50 self-end"
        title={badgeContent as string}
      />
{variant === "inner-capion"&&
  <div className=" z-50 relative  flex w-full justify-between items-end">
  <Link href={href} className=" text-white lg:max-w-[265px] lg:text-h3Semi md:text-bodyB4semi ">
    {title}
  </Link>

  <Link
    href={href}
    className="lg:text-bodyB4semi text-bodyB5semi
   text-white border-b pb-1 hover:border-secondary-400 text-nowrap hover:text-secondary-400 tr-500 "
  >
    ادامه مطلب
  </Link>
</div>
}
      <div className="absolute inset-0 overflow-hidden cursor-pointer  rounded-8 w-full h-full z-40">
        <Link href={href}>
          <Image
            src={cover}
            alt={`${title}.png`}
            fill
            quality={100}
            priority
            className="!relative tr-500 group-hover:scale-[1.19]"
          />
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;

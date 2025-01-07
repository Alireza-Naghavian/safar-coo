import Badge from "@/components/atoms/Badge/Badge";
import { BlogCard_T, FullBLogCard_T } from "@/types/cards.t";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Calendar2Icon from "../../../../public/icons/svgs/Calendar2Icon";
import ClockIcon from "../../../../public/icons/svgs/ClockIcon";

function BlogCard({ cover, href, title, badgeContent, variant }: BlogCard_T) {
  return (
    <div
      className=" px-3 py-4 relative rounded-8 xl:h-[265px] lg:h-[230px] h-[140px] 
                flex flex-col  justify-between group "
    >
      <Badge
        className="shadow-md z-50 self-end"
        title={badgeContent as string}
      />
      {variant === "inner-caption" && (
        <div className=" z-50 relative  flex w-full justify-between items-end">
          <Link
            href={href}
            className=" text-white lg:max-w-[265px] lg:text-h3Semi md:text-bodyB4semi "
          >
            {title}
          </Link>

          <Link
            href={href}
            className="lg:text-bodyB4semi text-bodyB5semi
                    text-white border-b pb-1 hover:border-secondary-400 
                    text-nowrap hover:text-secondary-400 tr-500 "
          >
            ادامه مطلب
          </Link>
        </div>
      )}
      <div
        className={`absolute inset-0 overflow-hidden 
                     rounded-8 w-full h-full z-40
         ${variant === "inner-caption" && "cursor-pointer"}`}
      >
        <Link href={href}>
          <Image
            src={cover}
            alt={`${title}.png`}
            fill
            quality={100}
            priority
            className={`!relative tr-500 ${
              variant === "inner-caption" && "group-hover:scale-[1.19]"
            }`}
          />
        </Link>
      </div>
    </div>
  );
}

export const FullBlogCard = ({
  title,
  desc,
  cover,
  ...restProps
}: FullBLogCard_T) => {
  return (
    <div className="flex items-start md:max-h-[285px]  gap-x-6 md:pb-[73px] sm:pb-8 border-b border-natural-gray3 ">
      <div className="md:max-w-[390px]  w-full  h-full">
        <BlogCard
          title={title}
          cover={cover}
          href={restProps.href}
          variant="full-detail"
          badgeContent={restProps.badgeContent}
        />
      </div>
      <div className="flex flex-col items-start gap-y-4 max-w-[590px]">
        <Link
          href={restProps.href}
          className="text-natural-black lg:text-h2Semi 
                    md:text-h3Semi text-bodyB6semi mb-10"
        >
          {title}
        </Link>
        <p
          className="text-natural-black line-clamp-2 w-full relative 
        lg:text-bodyB3Regular md:text-bodyB4Regular text-bodyB6Regular"
        >
          {desc}
        </p>
        {/* date & time */}
        <div className="flex flex-col items-start gap-y-3">
          <div className="flex  gap-x-1">
            <span className="mt-0.5"><Calendar2Icon  /></span>
            <span className="text-natural-gray3 sm:text-bodyB3Regular text-captionXXs ">
              {
                new Date(restProps.date).toLocaleString("fa-IR",
                     {dateStyle: "medium"}) as string
              }
            </span>
          </div>
          <div className="flex  gap-x-1">
            <span className="mt-0.5"><ClockIcon  /></span>
            <span className="text-natural-gray3 sm:text-bodyB3Regular text-captionXXs ">
              {
                new Date(restProps.time).toLocaleString("fa-IR",
                     {timeStyle:"short",hour12:true}) as string
              }
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

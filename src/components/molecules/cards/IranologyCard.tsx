import React from "react";
import BlogCard from "./BlogCard";
import NavLink from "@/components/atoms/buttons&links/NavLink";
import { IranologyCard_T } from "@/types/cards.t";
import Link from "next/link";
import Badge from "@/components/atoms/Badge/Badge";

function IranologyCard({ title, desc, cover, ...rest }: IranologyCard_T) {
  return (
    <div
      className="w-full h-full lg:max-h-[357px] relative 
    rounded-12 bg-primary-700 flex sm:flex-row flex-col gap-y-8 items-start gap-x-11  py-8 px-4"
    >
      <div className="w-full max-w-[495px]">
        <BlogCard
          cover={cover}
          href={rest.href}
          title={title}
          variant="full-detail"
          score={rest.score}
          badgeContent={rest.badgeContent}
        >
          <Link
            href={rest.href}
            className=" text-white absolute z-50 bottom-4 right-4 lg:max-w-[265px]
            
            lg:text-h4Semi md:text-bodyB4semi "
          >
            {title}
          </Link>
          <span
            className="text-white absolute z-50 bottom-4 left-4 line-clamp-1
           lg:max-w-[265px] md:text-bodyB4semi "
          >
            {rest.role === "ADMIN" ? (
              <Badge
                title="تجربه گر:سفرکو"
                className="!bg-primary-500"
                variant="fill"
              />
            ) : (
              <Badge
                title={`تجربه گر : ${rest.provider as string}`}
                className="!bg-accent-300"
                variant="fill"
              />
            )}
          </span>
        </BlogCard>
      </div>
      {/* card desc */}
      <div className="w-full h-full flex flex-col gap-y-10">
        <p className="text-white text-bodyB3Regular line-clamp-6">{desc}</p>
        <NavLink
          target={rest.href}
          size="xxl"
          state="hover"
          variant="fill"
          className="mr-auto rounded-8 bg-secondary-300"
        >
          جزییات بیشتر
        </NavLink>
      </div>
    </div>
  );
}

export default IranologyCard;

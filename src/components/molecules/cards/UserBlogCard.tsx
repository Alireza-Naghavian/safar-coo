import Badge from "@/components/atoms/Badge/Badge";
import NavLink from "@/components/atoms/buttons&links/NavLink";
import { ChildrenProps, ClassName_T } from "@/types/global.t";
import { Save2 } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
type UserBlogCard_T = Partial<ChildrenProps> &
  ClassName_T & {
    title: string;
    cover: string;
    desc: string;
    category: string;
    provider: string;
    href: string;
  };
function UserBlogCard({ title, desc, cover, ...rest }: UserBlogCard_T) {
  return (
    <div
      className={` relative flex flex-col gap-y-3 p-5 bg-white shadow-lg
         rounded-12 items-start ${rest.className}`}
    >
      {/*  user provider */}
      <div className="w-fit relative lg:flex hidden items-center gap-x-2  ">
        <Image
          alt="blog-provider-image"
          src={"/images/user_sample.png"}
          width={45}
          height={45}
          sizes="45px"
          className="rounded-full border border-primary-400"
        />
        <span className="text-natural-black text-bodyB2Regular tracking-tighter">
          تجربه گر :{rest.provider}
        </span>
      </div>
      {/* main content */}
      <div className="w-full flex flex-col md:flex-row items-center md:gap-y-0 gap-y-6 gap-x-6 h-full max-h-[373px] ">
        {/* cover */}
        <div className="relative bg-transparent w-full   h-[228px] md:w-[328px] rounded-12 ">
          <Image
            className="rounded-12  !w-full !h-full   !relative"
            fill
            alt={title}
            src={cover}
          />
          <Badge
            className=" absolute top-3 left-[14px] !bg-white"
            title={rest.category}
          />
        </div>
        {/* titlle & desc*/}
        <div className="w-full flex flex-col gap-y-4 items-start">
          <Link
            href={rest.href}
            className="lg:text-h4Semi md:text-h3Semi flex items-center gap-x-2
                            sm:text-bodyB2semi  tracking-tighter"
          >
            <Save2 variant="Bold" className="size-8 sm:size-10 fill-accent-400" />
            <h2>{title}</h2>
          </Link>

          <p className="text-natural-black md:text-bodyB3Regular 
          text-bodyB5Regular w-full sm:max-w-[95%] md:line-clamp-6 line-clamp-3 ">
            {desc}
          </p>
        </div>
      </div>
      {/* href link */}
      <div className=" flex justify-between w-full items-center mt-4">
      <div className="w-fit relative lg:hidden flex items-center gap-x-2 ">
        <Image
          alt="blog-provider-image"
          src={"/images/user_sample.png"}
          width={30}
          height={30}
          sizes="45px"
          className="rounded-full border border-primary-400"
        />
        <span className="text-natural-black sm:text-bodyB3Regular 
        text-bodyB5semi tracking-tighter flex items-center gap-x-1">
        <span className="hidden sm:block">تجربه گر:</span>
       <span>{rest.provider}</span>
        </span>
      </div>
      <NavLink
        size="xxl"
        state="hover"
        className="bg-secondary-300 mr-auto w-fit rounded-8 text-bodyB5semi
         sm:text-bodyB4semi lg:text-bodyB3semi  "
        target={rest.href}
        variant="fill"
      >
        جزییات بیشتر
      </NavLink>
      </div>
      {rest.children}
    </div>
  );
}

export default UserBlogCard;

import React from "react";
import { cva } from "class-variance-authority";
import Link from "next/link";
import Image from "next/image";
type LogoSize_T = "xxl" | "xl" | "md";
type Logo_T = {
  hasCaption: boolean;
  size: LogoSize_T;
  className?:string
};
const logoStyles = cva("first:rounded-full relative w-full h-full  flex items-center   gap-y-6 ", {
  variants: {
    size: {
      xxl: "first:w-[303px] first:h-[303px] last:text-center last:text-natural-black text-D4Semi  ",
      xl: "sm:first:w-[80px] first:w-[70px] sm:first:h-[80px] first:h-[70px]  last:text-center last:text-natural-black text-captionMd",
      md: "first:w-[42px] first:h-[42px] last:w-full last:text-center last:text-natural-black text-captionXXs",
    },
  },
  defaultVariants: {
    size: "xl",
  },
});
function Logo({ hasCaption, size,className }: Logo_T) {
  return <Link href={"/"}  className={logoStyles({size,className})}>

   <Image quality={100}  alt="logo.png" className="!relative" src={"/icons/logo_xxl_no_caption.png"} fill />

   {hasCaption &&
   <span className="text-white text-nowrap mr-4 text-base">کشف کنید،تجربه کنید</span>
   }
  </Link>;
}

export default Logo;

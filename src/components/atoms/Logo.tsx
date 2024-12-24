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
const logoStyles = cva("first:rounded-full relative w-full h-full flex  flex-col gap-y-6 items-center justify-center ", {
  variants: {
    size: {
      xxl: "first:w-[303px] first:h-[303px] last:w-full last:text-center last:text-natural-black text-D4Semi  ",
      xl: "first:w-[80px] first:h-[80px] last:w-full last:text-center last:text-natural-black text-captionMd",
      md: "first:w-[42px] first:h-[42px] last:w-full last:text-center last:text-natural-black text-captionXXs",
    },
  },
  defaultVariants: {
    size: "xl",
  },
});
function Logo({ hasCaption, size,className }: Logo_T) {
  return <Link href={"/"}  className={logoStyles({size,className})}>
   <div>
   <Image quality={100}  alt="logo.png" src={"/icons/logo_xxl_no_caption.png"} fill />
   </div>
   {hasCaption &&
   <span>کشف کنید،تجربه کنید</span>
   }
  </Link>;
}

export default Logo;

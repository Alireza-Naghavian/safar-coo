import { NavLinks_T } from "@/types/buttons.t";
import { ChildrenProps } from "@/types/global.t";
import { cva } from "class-variance-authority";
import Link from "next/link";
import React from "react";

export const linkStyles = cva(
  "box-center relative  transition-all duration-300 py-2 px-3 ",
  {
    variants: {
      size: {
        sm: "h-[30px] gap-1",
        md: "h-[34px]  gap-1",
        lg: "h-[36px] gap-1",
        xl: "h-[41px] gap-2",
        xxl:"h-[50px] gap-2",
      },
      variant: {
        fill: "outline-none ",
        outline: " bg-transparent border-2",
        rounded: "border-2 rounded-3xl",
        noBorder: "border-none bg-transparent",
      },
      state: {
        normal:"",
        hover: "hover:bg-secondary-400 ",
        disable: "disabled:bg-natural-gray3",
      },
    },
  }
);
const NavLink: React.FC<NavLinks_T & ChildrenProps> = ({
  children,
  size,
  state,
  variant,
  className,
  target,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={linkStyles({ className, size, state, variant })}>
      <Link href={target as string} className={`w-full h-full box-center  relative size-[${Object.values(size).join("")}]`}>
        {children} 
      </Link>
    </button>
  );
};

export default NavLink;

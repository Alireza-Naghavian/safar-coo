import { ButtonSizes_T, ButtonState_T, ButtonVars_T } from "@/types/buttons.t";
import { ChildrenProps } from "@/types/global.t";
import { cva } from "class-variance-authority";
import Link from "next/link";
import React from "react";
type NavLinks_T = {
  size: ButtonSizes_T;
  variant: ButtonVars_T;
  state: ButtonState_T;
  className?: string;
  target?: string;
};
const linkStyles = cva(
  "box-center relative hover:scale-[1.08] transition-all duration-300 py-2 px-3 ",
  {
    variants: {
      size: {
        sm: "w-[81px] h-[30px] gap-1",
        md: "w-[91px] h-[34px]  gap-1",
        lg: "w-[101px] h-[36px] gap-1",
        xl: "w-[115px] h-[41px] gap-2",
        xxl: "w-[125px] h-[50px] gap-2",
      },
      variant: {
        fill: "outline-none ",
        outline: " bg-transparent border-2",
        rounded: "border-2 rounded-3xl",
        noBorder: "border-none bg-transparent",
      },
      state: {
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

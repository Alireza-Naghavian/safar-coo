import { NavItem_T } from "@/types/navbar.t";
import { cva } from "class-variance-authority";
import Link from "next/link";
const itemStyles = cva("font-Yekan relative text-right tr-300 tracking-tight", {
  variants: {
    size: {
      mobile: `
                flex items-center gap-x-2 py-2 pr-2 w-full
                 text-natural-black text-base font-[325] 
                 leading-[150%]  bg-transparent hover:bg-secondary-200`,
      desktop: "text-xl font-[325]  text-white",
    },
  },
  defaultVariants: {
    size: "desktop",
  },
});
function NavItem({ size, className, target, title }: NavItem_T) {

  return (
    <div className=" group w-full ">
      <Link href={target} className={itemStyles({ className, size })}>
        {title}
      </Link>
    </div>
  );
}

export default NavItem;
